import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1EntityMentionData } from "./googlecloudcontactcenterinsightsv1entitymentiondata";
import { GoogleCloudContactcenterinsightsV1IntentMatchData } from "./googlecloudcontactcenterinsightsv1intentmatchdata";
import { GoogleCloudContactcenterinsightsV1IssueMatchData } from "./googlecloudcontactcenterinsightsv1issuematchdata";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";



// GoogleCloudContactcenterinsightsV1CallAnnotation
/** 
 * A piece of metadata that applies to a window of a call.
**/
export class GoogleCloudContactcenterinsightsV1CallAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationEndBoundary" })
  annotationEndBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

  @SpeakeasyMetadata({ data: "json, name=annotationStartBoundary" })
  annotationStartBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

  @SpeakeasyMetadata({ data: "json, name=channelTag" })
  channelTag?: number;

  @SpeakeasyMetadata({ data: "json, name=entityMentionData" })
  entityMentionData?: GoogleCloudContactcenterinsightsV1EntityMentionData;

  @SpeakeasyMetadata({ data: "json, name=holdData" })
  holdData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=intentMatchData" })
  intentMatchData?: GoogleCloudContactcenterinsightsV1IntentMatchData;

  @SpeakeasyMetadata({ data: "json, name=interruptionData" })
  interruptionData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=issueMatchData" })
  issueMatchData?: GoogleCloudContactcenterinsightsV1IssueMatchData;

  @SpeakeasyMetadata({ data: "json, name=phraseMatchData" })
  phraseMatchData?: GoogleCloudContactcenterinsightsV1PhraseMatchData;

  @SpeakeasyMetadata({ data: "json, name=sentimentData" })
  sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;

  @SpeakeasyMetadata({ data: "json, name=silenceData" })
  silenceData?: Map<string, any>;
}
