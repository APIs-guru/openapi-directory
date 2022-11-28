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
export var MobileUsabilityIssueIssueTypeEnum;
(function (MobileUsabilityIssueIssueTypeEnum) {
    MobileUsabilityIssueIssueTypeEnum["MobileUsabilityIssueTypeUnspecified"] = "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED";
    MobileUsabilityIssueIssueTypeEnum["UsesIncompatiblePlugins"] = "USES_INCOMPATIBLE_PLUGINS";
    MobileUsabilityIssueIssueTypeEnum["ConfigureViewport"] = "CONFIGURE_VIEWPORT";
    MobileUsabilityIssueIssueTypeEnum["FixedWidthViewport"] = "FIXED_WIDTH_VIEWPORT";
    MobileUsabilityIssueIssueTypeEnum["SizeContentToViewport"] = "SIZE_CONTENT_TO_VIEWPORT";
    MobileUsabilityIssueIssueTypeEnum["UseLegibleFontSizes"] = "USE_LEGIBLE_FONT_SIZES";
    MobileUsabilityIssueIssueTypeEnum["TapTargetsTooClose"] = "TAP_TARGETS_TOO_CLOSE";
})(MobileUsabilityIssueIssueTypeEnum || (MobileUsabilityIssueIssueTypeEnum = {}));
export var MobileUsabilityIssueSeverityEnum;
(function (MobileUsabilityIssueSeverityEnum) {
    MobileUsabilityIssueSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    MobileUsabilityIssueSeverityEnum["Warning"] = "WARNING";
    MobileUsabilityIssueSeverityEnum["Error"] = "ERROR";
})(MobileUsabilityIssueSeverityEnum || (MobileUsabilityIssueSeverityEnum = {}));
// MobileUsabilityIssue
/**
 * Mobile-usability issue.
**/
var MobileUsabilityIssue = /** @class */ (function (_super) {
    __extends(MobileUsabilityIssue, _super);
    function MobileUsabilityIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueType" }),
        __metadata("design:type", String)
    ], MobileUsabilityIssue.prototype, "issueType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MobileUsabilityIssue.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], MobileUsabilityIssue.prototype, "severity", void 0);
    return MobileUsabilityIssue;
}(SpeakeasyBase));
export { MobileUsabilityIssue };
