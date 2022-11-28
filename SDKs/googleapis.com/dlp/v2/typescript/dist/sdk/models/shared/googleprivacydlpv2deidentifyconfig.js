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
import { GooglePrivacyDlpV2ImageTransformations } from "./googleprivacydlpv2imagetransformations";
import { GooglePrivacyDlpV2InfoTypeTransformations } from "./googleprivacydlpv2infotypetransformations";
import { GooglePrivacyDlpV2RecordTransformations } from "./googleprivacydlpv2recordtransformations";
import { GooglePrivacyDlpV2TransformationErrorHandling } from "./googleprivacydlpv2transformationerrorhandling";
// GooglePrivacyDlpV2DeidentifyConfig
/**
 * The configuration that controls how the data will change.
**/
var GooglePrivacyDlpV2DeidentifyConfig = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2DeidentifyConfig, _super);
    function GooglePrivacyDlpV2DeidentifyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageTransformations" }),
        __metadata("design:type", GooglePrivacyDlpV2ImageTransformations)
    ], GooglePrivacyDlpV2DeidentifyConfig.prototype, "imageTransformations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infoTypeTransformations" }),
        __metadata("design:type", GooglePrivacyDlpV2InfoTypeTransformations)
    ], GooglePrivacyDlpV2DeidentifyConfig.prototype, "infoTypeTransformations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordTransformations" }),
        __metadata("design:type", GooglePrivacyDlpV2RecordTransformations)
    ], GooglePrivacyDlpV2DeidentifyConfig.prototype, "recordTransformations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformationErrorHandling" }),
        __metadata("design:type", GooglePrivacyDlpV2TransformationErrorHandling)
    ], GooglePrivacyDlpV2DeidentifyConfig.prototype, "transformationErrorHandling", void 0);
    return GooglePrivacyDlpV2DeidentifyConfig;
}(SpeakeasyBase));
export { GooglePrivacyDlpV2DeidentifyConfig };
