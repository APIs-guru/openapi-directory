import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommendationengineV1beta1ImportErrorsConfig } from "./googlecloudrecommendationenginev1beta1importerrorsconfig";
import { GoogleCloudRecommendationengineV1beta1InputConfig } from "./googlecloudrecommendationenginev1beta1inputconfig";


// GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest
/** 
 * Request message for Import methods.
**/
export class GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
