import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=annotations", elemType: shared.GoogleCloudContactcenterinsightsV1CallAnnotation })
  annotations?: GoogleCloudContactcenterinsightsV1CallAnnotation[];

  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudContactcenterinsightsV1Entity })
  entities?: Map<string, GoogleCloudContactcenterinsightsV1Entity>;

  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudContactcenterinsightsV1Intent })
  intents?: Map<string, GoogleCloudContactcenterinsightsV1Intent>;

  @Metadata({ data: "json, name=issueModelResult" })
  issueModelResult?: GoogleCloudContactcenterinsightsV1IssueModelResult;

  @Metadata({ data: "json, name=phraseMatchers", elemType: shared.GoogleCloudContactcenterinsightsV1PhraseMatchData })
  phraseMatchers?: Map<string, GoogleCloudContactcenterinsightsV1PhraseMatchData>;

  @Metadata({ data: "json, name=sentiments", elemType: shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment })
  sentiments?: GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[];
}
