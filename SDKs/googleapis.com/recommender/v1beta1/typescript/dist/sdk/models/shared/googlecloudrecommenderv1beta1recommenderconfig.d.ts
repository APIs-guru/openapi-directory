import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1RecommenderGenerationConfig } from "./googlecloudrecommenderv1beta1recommendergenerationconfig";
/**
 * Configuration for a Recommender.
**/
export declare class GoogleCloudRecommenderV1beta1RecommenderConfigInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    etag?: string;
    name?: string;
    recommenderGenerationConfig?: GoogleCloudRecommenderV1beta1RecommenderGenerationConfig;
    updateTime?: string;
}
/**
 * Configuration for a Recommender.
**/
export declare class GoogleCloudRecommenderV1beta1RecommenderConfig extends SpeakeasyBase {
    annotations?: Map<string, string>;
    displayName?: string;
    etag?: string;
    name?: string;
    recommenderGenerationConfig?: GoogleCloudRecommenderV1beta1RecommenderGenerationConfig;
    revisionId?: string;
    updateTime?: string;
}
