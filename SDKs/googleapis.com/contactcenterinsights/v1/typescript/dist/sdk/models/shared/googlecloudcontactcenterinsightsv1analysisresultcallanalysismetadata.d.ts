import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CallAnnotation } from "./googlecloudcontactcenterinsightsv1callannotation";
import { GoogleCloudContactcenterinsightsV1Entity } from "./googlecloudcontactcenterinsightsv1entity";
import { GoogleCloudContactcenterinsightsV1Intent } from "./googlecloudcontactcenterinsightsv1intent";
import { GoogleCloudContactcenterinsightsV1IssueModelResult } from "./googlecloudcontactcenterinsightsv1issuemodelresult";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
import { GoogleCloudContactcenterinsightsV1ConversationLevelSentiment } from "./googlecloudcontactcenterinsightsv1conversationlevelsentiment";
/**
 * Call-specific metadata created during analysis.
**/
export declare class GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata extends SpeakeasyBase {
    annotations?: GoogleCloudContactcenterinsightsV1CallAnnotation[];
    entities?: Map<string, GoogleCloudContactcenterinsightsV1Entity>;
    intents?: Map<string, GoogleCloudContactcenterinsightsV1Intent>;
    issueModelResult?: GoogleCloudContactcenterinsightsV1IssueModelResult;
    phraseMatchers?: Map<string, GoogleCloudContactcenterinsightsV1PhraseMatchData>;
    sentiments?: GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[];
}
