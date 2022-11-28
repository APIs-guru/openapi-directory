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
export var FeatureTypeEnum;
(function (FeatureTypeEnum) {
    FeatureTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    FeatureTypeEnum["FaceDetection"] = "FACE_DETECTION";
    FeatureTypeEnum["LandmarkDetection"] = "LANDMARK_DETECTION";
    FeatureTypeEnum["LogoDetection"] = "LOGO_DETECTION";
    FeatureTypeEnum["LabelDetection"] = "LABEL_DETECTION";
    FeatureTypeEnum["TextDetection"] = "TEXT_DETECTION";
    FeatureTypeEnum["DocumentTextDetection"] = "DOCUMENT_TEXT_DETECTION";
    FeatureTypeEnum["SafeSearchDetection"] = "SAFE_SEARCH_DETECTION";
    FeatureTypeEnum["ImageProperties"] = "IMAGE_PROPERTIES";
    FeatureTypeEnum["CropHints"] = "CROP_HINTS";
    FeatureTypeEnum["WebDetection"] = "WEB_DETECTION";
    FeatureTypeEnum["ProductSearch"] = "PRODUCT_SEARCH";
    FeatureTypeEnum["ObjectLocalization"] = "OBJECT_LOCALIZATION";
})(FeatureTypeEnum || (FeatureTypeEnum = {}));
// Feature
/**
 * The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
**/
var Feature = /** @class */ (function (_super) {
    __extends(Feature, _super);
    function Feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], Feature.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], Feature.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Feature.prototype, "type", void 0);
    return Feature;
}(SpeakeasyBase));
export { Feature };
