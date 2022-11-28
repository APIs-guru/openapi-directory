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
export var GoogleCloudVisionV1p2beta1FeatureTypeEnum;
(function (GoogleCloudVisionV1p2beta1FeatureTypeEnum) {
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["FaceDetection"] = "FACE_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["LandmarkDetection"] = "LANDMARK_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["LogoDetection"] = "LOGO_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["LabelDetection"] = "LABEL_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["TextDetection"] = "TEXT_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["DocumentTextDetection"] = "DOCUMENT_TEXT_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["SafeSearchDetection"] = "SAFE_SEARCH_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["ImageProperties"] = "IMAGE_PROPERTIES";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["CropHints"] = "CROP_HINTS";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["WebDetection"] = "WEB_DETECTION";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["ProductSearch"] = "PRODUCT_SEARCH";
    GoogleCloudVisionV1p2beta1FeatureTypeEnum["ObjectLocalization"] = "OBJECT_LOCALIZATION";
})(GoogleCloudVisionV1p2beta1FeatureTypeEnum || (GoogleCloudVisionV1p2beta1FeatureTypeEnum = {}));
// GoogleCloudVisionV1p2beta1Feature
/**
 * The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
**/
var GoogleCloudVisionV1p2beta1Feature = /** @class */ (function (_super) {
    __extends(GoogleCloudVisionV1p2beta1Feature, _super);
    function GoogleCloudVisionV1p2beta1Feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], GoogleCloudVisionV1p2beta1Feature.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p2beta1Feature.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudVisionV1p2beta1Feature.prototype, "type", void 0);
    return GoogleCloudVisionV1p2beta1Feature;
}(SpeakeasyBase));
export { GoogleCloudVisionV1p2beta1Feature };
