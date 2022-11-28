import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CallAnnotation } from "./googlecloudcontactcenterinsightsv1callannotation";
import { GoogleCloudContactcenterinsightsV1Entity } from "./googlecloudcontactcenterinsightsv1entity";
import { GoogleCloudContactcenterinsightsV1Intent } from "./googlecloudcontactcenterinsightsv1intent";
import { GoogleCloudContactcenterinsightsV1IssueModelResult } from "./googlecloudcontactcenterinsightsv1issuemodelresult";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
import { GoogleCloudContactcenterinsightsV1ConversationLevelSentiment } from "./googlecloudcontactcenterinsightsv1conversationlevelsentiment";



// GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata
/** 
 * Call-specific metadata created during analysis.
**/
export class GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: GoogleCloudContactcenterinsightsV1CallAnnotation })
  annotations?: GoogleCloudContactcenterinsightsV1CallAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudContactcenterinsightsV1Entity })
  entities?: Map<string, GoogleCloudContactcenterinsightsV1Entity>;

  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudContactcenterinsightsV1Intent })
  intents?: Map<string, GoogleCloudContactcenterinsightsV1Intent>;

  @SpeakeasyMetadata({ data: "json, name=issueModelResult" })
  issueModelResult?: GoogleCloudContactcenterinsightsV1IssueModelResult;

  @SpeakeasyMetadata({ data: "json, name=phraseMatchers", elemType: GoogleCloudContactcenterinsightsV1PhraseMatchData })
  phraseMatchers?: Map<string, GoogleCloudContactcenterinsightsV1PhraseMatchData>;

  @SpeakeasyMetadata({ data: "json, name=sentiments", elemType: GoogleCloudContactcenterinsightsV1ConversationLevelSentiment })
  sentiments?: GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[];
}
