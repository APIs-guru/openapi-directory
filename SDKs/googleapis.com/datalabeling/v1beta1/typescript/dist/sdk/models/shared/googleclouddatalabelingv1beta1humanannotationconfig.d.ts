import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for how human labeling task should be done.
**/
export declare class GoogleCloudDatalabelingV1beta1HumanAnnotationConfig extends SpeakeasyBase {
    annotatedDatasetDescription?: string;
    annotatedDatasetDisplayName?: string;
    contributorEmails?: string[];
    instruction?: string;
    labelGroup?: string;
    languageCode?: string;
    questionDuration?: string;
    replicaCount?: number;
    userEmailAddress?: string;
}
