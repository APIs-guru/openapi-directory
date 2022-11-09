import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1AnswerFeedback } from "./googlecloudcontactcenterinsightsv1answerfeedback";
import { GoogleCloudContactcenterinsightsV1ArticleSuggestionData } from "./googlecloudcontactcenterinsightsv1articlesuggestiondata";
import { GoogleCloudContactcenterinsightsV1DialogflowInteractionData } from "./googlecloudcontactcenterinsightsv1dialogflowinteractiondata";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1FaqAnswerData } from "./googlecloudcontactcenterinsightsv1faqanswerdata";
import { GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData } from "./googlecloudcontactcenterinsightsv1smartcomposesuggestiondata";
import { GoogleCloudContactcenterinsightsV1SmartReplyData } from "./googlecloudcontactcenterinsightsv1smartreplydata";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";


// GoogleCloudContactcenterinsightsV1RuntimeAnnotation
/** 
 * An annotation that was generated during the customer and agent interaction.
**/
export class GoogleCloudContactcenterinsightsV1RuntimeAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationId" })
  annotationId?: string;

  @Metadata({ data: "json, name=answerFeedback" })
  answerFeedback?: GoogleCloudContactcenterinsightsV1AnswerFeedback;

  @Metadata({ data: "json, name=articleSuggestion" })
  articleSuggestion?: GoogleCloudContactcenterinsightsV1ArticleSuggestionData;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dialogflowInteraction" })
  dialogflowInteraction?: GoogleCloudContactcenterinsightsV1DialogflowInteractionData;

  @Metadata({ data: "json, name=endBoundary" })
  endBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

  @Metadata({ data: "json, name=faqAnswer" })
  faqAnswer?: GoogleCloudContactcenterinsightsV1FaqAnswerData;

  @Metadata({ data: "json, name=smartComposeSuggestion" })
  smartComposeSuggestion?: GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData;

  @Metadata({ data: "json, name=smartReply" })
  smartReply?: GoogleCloudContactcenterinsightsV1SmartReplyData;

  @Metadata({ data: "json, name=startBoundary" })
  startBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
}
