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
import { GoogleCloudDatalabelingV1beta1AnnotationMetadata } from "./googleclouddatalabelingv1beta1annotationmetadata";
import { GoogleCloudDatalabelingV1beta1AnnotationValue } from "./googleclouddatalabelingv1beta1annotationvalue";
export var GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum;
(function (GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum) {
    GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum["AnnotationSentimentUnspecified"] = "ANNOTATION_SENTIMENT_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum["Negative"] = "NEGATIVE";
    GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum["Positive"] = "POSITIVE";
})(GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum || (GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum = {}));
export var GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum;
(function (GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum) {
    GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum["AnnotationSourceUnspecified"] = "ANNOTATION_SOURCE_UNSPECIFIED";
    GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum["Operator"] = "OPERATOR";
})(GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum || (GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum = {}));
// GoogleCloudDatalabelingV1beta1Annotation
/**
 * Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
**/
var GoogleCloudDatalabelingV1beta1Annotation = /** @class */ (function (_super) {
    __extends(GoogleCloudDatalabelingV1beta1Annotation, _super);
    function GoogleCloudDatalabelingV1beta1Annotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationMetadata" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1AnnotationMetadata)
    ], GoogleCloudDatalabelingV1beta1Annotation.prototype, "annotationMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSentiment" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Annotation.prototype, "annotationSentiment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationSource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Annotation.prototype, "annotationSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationValue" }),
        __metadata("design:type", GoogleCloudDatalabelingV1beta1AnnotationValue)
    ], GoogleCloudDatalabelingV1beta1Annotation.prototype, "annotationValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatalabelingV1beta1Annotation.prototype, "name", void 0);
    return GoogleCloudDatalabelingV1beta1Annotation;
}(SpeakeasyBase));
export { GoogleCloudDatalabelingV1beta1Annotation };
