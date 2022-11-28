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
export var GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum;
(function (GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum) {
    GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum["CopyModeUnspecified"] = "COPY_MODE_UNSPECIFIED";
    GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum["DoNotCopy"] = "DO_NOT_COPY";
    GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum["AlwaysCopy"] = "ALWAYS_COPY";
    GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum["CopyAppliable"] = "COPY_APPLIABLE";
})(GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum || (GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum = {}));
export var GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum;
(function (GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum) {
    GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum["LabelViewBasic"] = "LABEL_VIEW_BASIC";
    GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum["LabelViewFull"] = "LABEL_VIEW_FULL";
})(GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum || (GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum = {}));
// GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest
/**
 * Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \
**/
var GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest, _super);
    function GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyMode" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest.prototype, "copyMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useAdminAccess" }),
        __metadata("design:type", Boolean)
    ], GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest.prototype, "useAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest.prototype, "view", void 0);
    return GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest };
