import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnnotationBoundary } from "./googlecloudcontactcenterinsightsv1annotationboundary";
import { GoogleCloudContactcenterinsightsV1EntityMentionData } from "./googlecloudcontactcenterinsightsv1entitymentiondata";
import { GoogleCloudContactcenterinsightsV1IntentMatchData } from "./googlecloudcontactcenterinsightsv1intentmatchdata";
import { GoogleCloudContactcenterinsightsV1IssueMatchData } from "./googlecloudcontactcenterinsightsv1issuematchdata";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
/**
 * A piece of metadata that applies to a window of a call.
**/
export declare class GoogleCloudContactcenterinsightsV1CallAnnotation extends SpeakeasyBase {
    annotationEndBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    annotationStartBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
    channelTag?: number;
    entityMentionData?: GoogleCloudContactcenterinsightsV1EntityMentionData;
    holdData?: Map<string, any>;
    intentMatchData?: GoogleCloudContactcenterinsightsV1IntentMatchData;
    interruptionData?: Map<string, any>;
    issueMatchData?: GoogleCloudContactcenterinsightsV1IssueMatchData;
    phraseMatchData?: GoogleCloudContactcenterinsightsV1PhraseMatchData;
    sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;
    silenceData?: Map<string, any>;
}
