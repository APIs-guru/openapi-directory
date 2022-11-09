import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaUserEventInputConfig } from "./googlecloudretailv2alphausereventinputconfig";


// GoogleCloudRetailV2alphaImportUserEventsRequest
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudRetailV2alphaImportUserEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2alphaUserEventInputConfig;
}
