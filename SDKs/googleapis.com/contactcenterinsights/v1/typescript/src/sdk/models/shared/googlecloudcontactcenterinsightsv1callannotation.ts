import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1EntityMentionData } from "./googlecloudcontactcenterinsightsv1entitymentiondata";
import { GoogleCloudContactcenterinsightsV1IntentMatchData } from "./googlecloudcontactcenterinsightsv1intentmatchdata";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";


// GoogleCloudContactcenterinsightsV1CallAnnotation
/** 
 * A piece of metadata that applies to a window of a call.
**/
export class GoogleCloudContactcenterinsightsV1CallAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationEndBoundary" })
  annotationEndBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

  @Metadata({ data: "json, name=annotationStartBoundary" })
  annotationStartBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

  @Metadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @Metadata({ data: "json, name=entityMentionData" })
  entityMentionData?: GoogleCloudContactcenterinsightsV1EntityMentionData;

  @Metadata({ data: "json, name=holdData" })
  holdData?: Map<string, any>;

  @Metadata({ data: "json, name=intentMatchData" })
  intentMatchData?: GoogleCloudContactcenterinsightsV1IntentMatchData;

  @Metadata({ data: "json, name=interruptionData" })
  interruptionData?: Map<string, any>;

  @Metadata({ data: "json, name=phraseMatchData" })
  phraseMatchData?: GoogleCloudContactcenterinsightsV1PhraseMatchData;

  @Metadata({ data: "json, name=sentimentData" })
  sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;

  @Metadata({ data: "json, name=silenceData" })
  silenceData?: Map<string, any>;
}
