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
import { AnnotationConfig } from "./annotationconfig";
import { DicomConfig } from "./dicomconfig";
import { DicomTagConfig } from "./dicomtagconfig";
import { FhirConfig } from "./fhirconfig";
import { FhirFieldConfig } from "./fhirfieldconfig";
import { ImageConfig } from "./imageconfig";
import { DeidentifyOperationMetadata } from "./deidentifyoperationmetadata";
import { TextConfig } from "./textconfig";
// DeidentifyConfig
/**
 * Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
**/
var DeidentifyConfig = /** @class */ (function (_super) {
    __extends(DeidentifyConfig, _super);
    function DeidentifyConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotation" }),
        __metadata("design:type", AnnotationConfig)
    ], DeidentifyConfig.prototype, "annotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dicom" }),
        __metadata("design:type", DicomConfig)
    ], DeidentifyConfig.prototype, "dicom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dicomTagConfig" }),
        __metadata("design:type", DicomTagConfig)
    ], DeidentifyConfig.prototype, "dicomTagConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fhir" }),
        __metadata("design:type", FhirConfig)
    ], DeidentifyConfig.prototype, "fhir", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fhirFieldConfig" }),
        __metadata("design:type", FhirFieldConfig)
    ], DeidentifyConfig.prototype, "fhirFieldConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", ImageConfig)
    ], DeidentifyConfig.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationMetadata" }),
        __metadata("design:type", DeidentifyOperationMetadata)
    ], DeidentifyConfig.prototype, "operationMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", TextConfig)
    ], DeidentifyConfig.prototype, "text", void 0);
    return DeidentifyConfig;
}(SpeakeasyBase));
export { DeidentifyConfig };
