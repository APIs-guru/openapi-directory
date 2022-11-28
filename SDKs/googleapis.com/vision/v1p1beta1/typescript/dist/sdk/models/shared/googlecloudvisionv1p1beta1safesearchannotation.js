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
export var GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum;
(function (GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum) {
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum || (GoogleCloudVisionV1p1beta1SafeSearchAnnotationAdultEnum = {}));
export var GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum;
(function (GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum) {
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum || (GoogleCloudVisionV1p1beta1SafeSearchAnnotationMedicalEnum = {}));
export var GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum;
(function (GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum) {
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum || (GoogleCloudVisionV1p1beta1SafeSearchAnnotationRacyEnum = {}));
export var GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum;
(function (GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum) {
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum || (GoogleCloudVisionV1p1beta1SafeSearchAnnotationSpoofEnum = {}));
export var GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum;
(function (GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum) {
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum["Unknown"] = "UNKNOWN";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum["Unlikely"] = "UNLIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum["Possible"] = "POSSIBLE";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum["Likely"] = "LIKELY";
    GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum["VeryLikely"] = "VERY_LIKELY";
})(GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum || (GoogleCloudVisionV1p1beta1SafeSearchAnnotationViolenceEnum = {}));
// GoogleCloudVisionV1p1beta1SafeSearchAnnotation
/**
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
**/
var GoogleCloudVisionV1p1beta1SafeSearchAnnotation = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p1beta1SafeSearchAnnotation, _super);
    function GoogleCloudVisionV1p1beta1SafeSearchAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adult" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1SafeSearchAnnotation.prototype, "adult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medical" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1SafeSearchAnnotation.prototype, "medical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=racy" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1SafeSearchAnnotation.prototype, "racy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spoof" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1SafeSearchAnnotation.prototype, "spoof", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violence" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p1beta1SafeSearchAnnotation.prototype, "violence", void 0);
    return GoogleCloudVisionV1p1beta1SafeSearchAnnotation;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p1beta1SafeSearchAnnotation };
