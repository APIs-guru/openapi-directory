import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1ImportErrorsConfig
/** 
 * Configuration of destination for Import related errors.
**/
export class GoogleCloudRecommendationengineV1beta1ImportErrorsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPrefix" })
  gcsPrefix?: string;
}
