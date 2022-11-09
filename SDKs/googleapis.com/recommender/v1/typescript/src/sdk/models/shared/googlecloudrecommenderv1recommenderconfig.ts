import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommenderV1RecommenderGenerationConfig } from "./googlecloudrecommenderv1recommendergenerationconfig";


// GoogleCloudRecommenderV1RecommenderConfig
/** 
 * Configuration for a Recommender.
**/
export class GoogleCloudRecommenderV1RecommenderConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recommenderGenerationConfig" })
  recommenderGenerationConfig?: GoogleCloudRecommenderV1RecommenderGenerationConfig;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
