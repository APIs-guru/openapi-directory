import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaImportErrorsConfig } from "./googlecloudretailv2betaimporterrorsconfig";
import { GoogleCloudRetailV2betaUserEventInputConfig } from "./googlecloudretailv2betausereventinputconfig";


// GoogleCloudRetailV2betaImportUserEventsRequest
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudRetailV2betaImportUserEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2betaUserEventInputConfig;
}
