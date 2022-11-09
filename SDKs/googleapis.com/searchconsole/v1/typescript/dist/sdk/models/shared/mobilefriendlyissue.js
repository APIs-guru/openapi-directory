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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var MobileFriendlyIssueRuleEnum;
(function (MobileFriendlyIssueRuleEnum) {
    MobileFriendlyIssueRuleEnum["MobileFriendlyRuleUnspecified"] = "MOBILE_FRIENDLY_RULE_UNSPECIFIED";
    MobileFriendlyIssueRuleEnum["UsesIncompatiblePlugins"] = "USES_INCOMPATIBLE_PLUGINS";
    MobileFriendlyIssueRuleEnum["ConfigureViewport"] = "CONFIGURE_VIEWPORT";
    MobileFriendlyIssueRuleEnum["FixedWidthViewport"] = "FIXED_WIDTH_VIEWPORT";
    MobileFriendlyIssueRuleEnum["SizeContentToViewport"] = "SIZE_CONTENT_TO_VIEWPORT";
    MobileFriendlyIssueRuleEnum["UseLegibleFontSizes"] = "USE_LEGIBLE_FONT_SIZES";
    MobileFriendlyIssueRuleEnum["TapTargetsTooClose"] = "TAP_TARGETS_TOO_CLOSE";
})(MobileFriendlyIssueRuleEnum || (MobileFriendlyIssueRuleEnum = {}));
// MobileFriendlyIssue
/**
 * Mobile-friendly issue.
**/
var MobileFriendlyIssue = /** @class */ (function (_super) {
    __extends(MobileFriendlyIssue, _super);
    function MobileFriendlyIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=rule" }),
        __metadata("design:type", String)
    ], MobileFriendlyIssue.prototype, "rule", void 0);
    return MobileFriendlyIssue;
}(SpeakeasyBase));
export { MobileFriendlyIssue };
