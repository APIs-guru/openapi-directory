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
import { GoogleCloudContactcenterinsightsV1AnswerFeedback } from "./googlecloudcontactcenterinsightsv1answerfeedback";
import { GoogleCloudContactcenterinsightsV1ArticleSuggestionData } from "./googlecloudcontactcenterinsightsv1articlesuggestiondata";
import { GoogleCloudContactcenterinsightsV1DialogflowInteractionData } from "./googlecloudcontactcenterinsightsv1dialogflowinteractiondata";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1FaqAnswerData } from "./googlecloudcontactcenterinsightsv1faqanswerdata";
import { GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData } from "./googlecloudcontactcenterinsightsv1smartcomposesuggestiondata";
import { GoogleCloudContactcenterinsightsV1SmartReplyData } from "./googlecloudcontactcenterinsightsv1smartreplydata";
// GoogleCloudContactcenterinsightsV1RuntimeAnnotation
/**
 * An annotation that was generated during the customer and agent interaction.
**/
var GoogleCloudContactcenterinsightsV1RuntimeAnnotation = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1RuntimeAnnotation, _super);
    function GoogleCloudContactcenterinsightsV1RuntimeAnnotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotationId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "annotationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answerFeedback" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1AnswerFeedback)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "answerFeedback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articleSuggestion" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ArticleSuggestionData)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "articleSuggestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogflowInteraction" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1DialogflowInteractionData)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "dialogflowInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endBoundary" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1AnnotationBoundary)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "endBoundary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=faqAnswer" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1FaqAnswerData)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "faqAnswer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smartComposeSuggestion" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "smartComposeSuggestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smartReply" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1SmartReplyData)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "smartReply", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startBoundary" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1AnnotationBoundary)
    ], GoogleCloudContactcenterinsightsV1RuntimeAnnotation.prototype, "startBoundary", void 0);
    return GoogleCloudContactcenterinsightsV1RuntimeAnnotation;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1RuntimeAnnotation };
