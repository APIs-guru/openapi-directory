import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1RecommenderGenerationConfig } from "./googlecloudrecommenderv1recommendergenerationconfig";



// GoogleCloudRecommenderV1RecommenderConfig
/** 
 * Configuration for a Recommender.
**/
export class GoogleCloudRecommenderV1RecommenderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recommenderGenerationConfig" })
  recommenderGenerationConfig?: GoogleCloudRecommenderV1RecommenderGenerationConfig;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudRecommenderV1RecommenderConfigInput
/** 
 * Configuration for a Recommender.
**/
export class GoogleCloudRecommenderV1RecommenderConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=recommenderGenerationConfig" })
  recommenderGenerationConfig?: GoogleCloudRecommenderV1RecommenderGenerationConfig;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
