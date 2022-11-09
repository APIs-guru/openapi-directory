import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1ImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRecommendationengineV1beta1ImportErrorsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
