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
export class GoogleCloudContactcenterinsightsV1RuntimeAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationId" })
  annotationId?: string;

  @SpeakeasyMetadata({ data: "json, name=answerFeedback" })
  answerFeedback?: GoogleCloudContactcenterinsightsV1AnswerFeedback;

  @SpeakeasyMetadata({ data: "json, name=articleSuggestion" })
  articleSuggestion?: GoogleCloudContactcenterinsightsV1ArticleSuggestionData;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogflowInteraction" })
  dialogflowInteraction?: GoogleCloudContactcenterinsightsV1DialogflowInteractionData;

  @SpeakeasyMetadata({ data: "json, name=endBoundary" })
  endBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

  @SpeakeasyMetadata({ data: "json, name=faqAnswer" })
  faqAnswer?: GoogleCloudContactcenterinsightsV1FaqAnswerData;

  @SpeakeasyMetadata({ data: "json, name=smartComposeSuggestion" })
  smartComposeSuggestion?: GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData;

  @SpeakeasyMetadata({ data: "json, name=smartReply" })
  smartReply?: GoogleCloudContactcenterinsightsV1SmartReplyData;

  @SpeakeasyMetadata({ data: "json, name=startBoundary" })
  startBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
}
