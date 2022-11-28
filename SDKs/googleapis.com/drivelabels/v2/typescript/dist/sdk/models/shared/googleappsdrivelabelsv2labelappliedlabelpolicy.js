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
export var GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum;
(function (GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum) {
    GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum["CopyModeUnspecified"] = "COPY_MODE_UNSPECIFIED";
    GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum["DoNotCopy"] = "DO_NOT_COPY";
    GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum["AlwaysCopy"] = "ALWAYS_COPY";
    GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum["CopyAppliable"] = "COPY_APPLIABLE";
})(GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum || (GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum = {}));
// GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy
/**
 * Behavior of this label when it's applied to Drive items.
**/
var GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy, _super);
    function GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyMode" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy.prototype, "copyMode", void 0);
    return GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
}(SpeakeasyBase));
export { GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy };
