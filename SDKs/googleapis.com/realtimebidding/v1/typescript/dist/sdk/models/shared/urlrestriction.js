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
import { Date } from "./date";
export var UrlRestrictionRestrictionTypeEnum;
(function (UrlRestrictionRestrictionTypeEnum) {
    UrlRestrictionRestrictionTypeEnum["RestrictionTypeUnspecified"] = "RESTRICTION_TYPE_UNSPECIFIED";
    UrlRestrictionRestrictionTypeEnum["Contains"] = "CONTAINS";
    UrlRestrictionRestrictionTypeEnum["Equals"] = "EQUALS";
    UrlRestrictionRestrictionTypeEnum["StartsWith"] = "STARTS_WITH";
    UrlRestrictionRestrictionTypeEnum["EndsWith"] = "ENDS_WITH";
    UrlRestrictionRestrictionTypeEnum["DoesNotEqual"] = "DOES_NOT_EQUAL";
    UrlRestrictionRestrictionTypeEnum["DoesNotContain"] = "DOES_NOT_CONTAIN";
    UrlRestrictionRestrictionTypeEnum["DoesNotStartWith"] = "DOES_NOT_START_WITH";
    UrlRestrictionRestrictionTypeEnum["DoesNotEndWith"] = "DOES_NOT_END_WITH";
})(UrlRestrictionRestrictionTypeEnum || (UrlRestrictionRestrictionTypeEnum = {}));
// UrlRestriction
/**
 * Represents the URL restriction (for the URL captured by the pixel callback) for a user list.
**/
var UrlRestriction = /** @class */ (function (_super) {
    __extends(UrlRestriction, _super);
    function UrlRestriction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], UrlRestriction.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictionType" }),
        __metadata("design:type", String)
    ], UrlRestriction.prototype, "restrictionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], UrlRestriction.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UrlRestriction.prototype, "url", void 0);
    return UrlRestriction;
}(SpeakeasyBase));
export { UrlRestriction };
