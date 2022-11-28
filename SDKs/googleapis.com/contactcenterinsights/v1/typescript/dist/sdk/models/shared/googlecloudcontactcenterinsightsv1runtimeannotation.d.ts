import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnswerFeedback } from "./googlecloudcontactcenterinsightsv1answerfeedback";
import { GoogleCloudContactcenterinsightsV1ArticleSuggestionData } from "./googlecloudcontactcenterinsightsv1articlesuggestiondata";
import { GoogleCloudContactcenterinsightsV1DialogflowInteractionData } from "./googlecloudcontactcenterinsightsv1dialogflowinteractiondata";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1FaqAnswerData } from "./googlecloudcontactcenterinsightsv1faqanswerdata";
import { GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData } from "./googlecloudcontactcenterinsightsv1smartcomposesuggestiondata";
import { GoogleCloudContactcenterinsightsV1SmartReplyData } from "./googlecloudcontactcenterinsightsv1smartreplydata";
/**
 * An annotation that was generated during the customer and agent interaction.
**/
export declare class GoogleCloudContactcenterinsightsV1RuntimeAnnotation extends SpeakeasyBase {
    annotationId?: string;
    answerFeedback?: GoogleCloudContactcenterinsightsV1AnswerFeedback;
    articleSuggestion?: GoogleCloudContactcenterinsightsV1ArticleSuggestionData;
    createTime?: string;
    dialogflowInteraction?: GoogleCloudContactcenterinsightsV1DialogflowInteractionData;
    endBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    faqAnswer?: GoogleCloudContactcenterinsightsV1FaqAnswerData;
    smartComposeSuggestion?: GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData;
    smartReply?: GoogleCloudContactcenterinsightsV1SmartReplyData;
    startBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
}
