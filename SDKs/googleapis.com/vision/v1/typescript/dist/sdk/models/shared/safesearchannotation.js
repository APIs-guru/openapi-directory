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
export var SafeSearchAnnotationAdultEnum;
(function (SafeSearchAnnotationAdultEnum) {
    SafeSearchAnnotationAdultEnum["Unknown"] = "UNKNOWN";
    SafeSearchAnnotationAdultEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    SafeSearchAnnotationAdultEnum["Unlikely"] = "UNLIKELY";
    SafeSearchAnnotationAdultEnum["Possible"] = "POSSIBLE";
    SafeSearchAnnotationAdultEnum["Likely"] = "LIKELY";
    SafeSearchAnnotationAdultEnum["VeryLikely"] = "VERY_LIKELY";
})(SafeSearchAnnotationAdultEnum || (SafeSearchAnnotationAdultEnum = {}));
export var SafeSearchAnnotationMedicalEnum;
(function (SafeSearchAnnotationMedicalEnum) {
    SafeSearchAnnotationMedicalEnum["Unknown"] = "UNKNOWN";
    SafeSearchAnnotationMedicalEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    SafeSearchAnnotationMedicalEnum["Unlikely"] = "UNLIKELY";
    SafeSearchAnnotationMedicalEnum["Possible"] = "POSSIBLE";
    SafeSearchAnnotationMedicalEnum["Likely"] = "LIKELY";
    SafeSearchAnnotationMedicalEnum["VeryLikely"] = "VERY_LIKELY";
})(SafeSearchAnnotationMedicalEnum || (SafeSearchAnnotationMedicalEnum = {}));
export var SafeSearchAnnotationRacyEnum;
(function (SafeSearchAnnotationRacyEnum) {
    SafeSearchAnnotationRacyEnum["Unknown"] = "UNKNOWN";
    SafeSearchAnnotationRacyEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    SafeSearchAnnotationRacyEnum["Unlikely"] = "UNLIKELY";
    SafeSearchAnnotationRacyEnum["Possible"] = "POSSIBLE";
    SafeSearchAnnotationRacyEnum["Likely"] = "LIKELY";
    SafeSearchAnnotationRacyEnum["VeryLikely"] = "VERY_LIKELY";
})(SafeSearchAnnotationRacyEnum || (SafeSearchAnnotationRacyEnum = {}));
export var SafeSearchAnnotationSpoofEnum;
(function (SafeSearchAnnotationSpoofEnum) {
    SafeSearchAnnotationSpoofEnum["Unknown"] = "UNKNOWN";
    SafeSearchAnnotationSpoofEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    SafeSearchAnnotationSpoofEnum["Unlikely"] = "UNLIKELY";
    SafeSearchAnnotationSpoofEnum["Possible"] = "POSSIBLE";
    SafeSearchAnnotationSpoofEnum["Likely"] = "LIKELY";
    SafeSearchAnnotationSpoofEnum["VeryLikely"] = "VERY_LIKELY";
})(SafeSearchAnnotationSpoofEnum || (SafeSearchAnnotationSpoofEnum = {}));
export var SafeSearchAnnotationViolenceEnum;
(function (SafeSearchAnnotationViolenceEnum) {
    SafeSearchAnnotationViolenceEnum["Unknown"] = "UNKNOWN";
    SafeSearchAnnotationViolenceEnum["VeryUnlikely"] = "VERY_UNLIKELY";
    SafeSearchAnnotationViolenceEnum["Unlikely"] = "UNLIKELY";
    SafeSearchAnnotationViolenceEnum["Possible"] = "POSSIBLE";
    SafeSearchAnnotationViolenceEnum["Likely"] = "LIKELY";
    SafeSearchAnnotationViolenceEnum["VeryLikely"] = "VERY_LIKELY";
})(SafeSearchAnnotationViolenceEnum || (SafeSearchAnnotationViolenceEnum = {}));
// SafeSearchAnnotation
/**
 * Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
**/
var SafeSearchAnnotation = /** @class */ (function (_super) {
    __extends(SafeSearchAnnotation, _super);
    function SafeSearchAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adult" }),
        __metadata("design:type", String)
    ], SafeSearchAnnotation.prototype, "adult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medical" }),
        __metadata("design:type", String)
    ], SafeSearchAnnotation.prototype, "medical", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=racy" }),
        __metadata("design:type", String)
    ], SafeSearchAnnotation.prototype, "racy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spoof" }),
        __metadata("design:type", String)
    ], SafeSearchAnnotation.prototype, "spoof", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=violence" }),
        __metadata("design:type", String)
    ], SafeSearchAnnotation.prototype, "violence", void 0);
    return SafeSearchAnnotation;
}(SpeakeasyBase));
export { SafeSearchAnnotation };
