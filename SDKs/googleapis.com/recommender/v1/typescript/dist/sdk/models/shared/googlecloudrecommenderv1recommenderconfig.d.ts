import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1RecommenderGenerationConfig } from "./googlecloudrecommenderv1recommendergenerationconfig";
/**
 * Configuration for a Recommender.
**/
export declare class GoogleCloudRecommenderV1RecommenderConfig extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    etag?: string;
    name?: string;
    recommenderGenerationConfig?: GoogleCloudRecommenderV1RecommenderGenerationConfig;
    revisionId?: string;
    updateTime?: string;
}
/**
 * Configuration for a Recommender.
**/
export declare class GoogleCloudRecommenderV1RecommenderConfigInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    etag?: string;
    name?: string;
    recommenderGenerationConfig?: GoogleCloudRecommenderV1RecommenderGenerationConfig;
    updateTime?: string;
}
