var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JsonPathMatcher } from "./jsonpathmatcher";
export var ContentMatcherMatcherEnum;
(function (ContentMatcherMatcherEnum) {
    ContentMatcherMatcherEnum["ContentMatcherOptionUnspecified"] = "CONTENT_MATCHER_OPTION_UNSPECIFIED";
    ContentMatcherMatcherEnum["ContainsString"] = "CONTAINS_STRING";
    ContentMatcherMatcherEnum["NotContainsString"] = "NOT_CONTAINS_STRING";
    ContentMatcherMatcherEnum["MatchesRegex"] = "MATCHES_REGEX";
    ContentMatcherMatcherEnum["NotMatchesRegex"] = "NOT_MATCHES_REGEX";
    ContentMatcherMatcherEnum["MatchesJsonPath"] = "MATCHES_JSON_PATH";
    ContentMatcherMatcherEnum["NotMatchesJsonPath"] = "NOT_MATCHES_JSON_PATH";
})(ContentMatcherMatcherEnum || (ContentMatcherMatcherEnum = {}));
// ContentMatcher
/**
 * Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
**/
var ContentMatcher = /** @class */ (function (_super) {
    __extends(ContentMatcher, _super);
    function ContentMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ContentMatcher.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jsonPathMatcher" }),
        __metadata("design:type", JsonPathMatcher)
    ], ContentMatcher.prototype, "jsonPathMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matcher" }),
        __metadata("design:type", String)
    ], ContentMatcher.prototype, "matcher", void 0);
    return ContentMatcher;
}(SpeakeasyBase));
export { ContentMatcher };
