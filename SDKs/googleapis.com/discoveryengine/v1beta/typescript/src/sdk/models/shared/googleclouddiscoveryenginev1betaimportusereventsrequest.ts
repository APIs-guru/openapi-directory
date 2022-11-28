import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaBigQuerySource } from "./googleclouddiscoveryenginev1betabigquerysource";
import { GoogleCloudDiscoveryengineV1betaImportErrorConfig } from "./googleclouddiscoveryenginev1betaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1betaGcsSource } from "./googleclouddiscoveryenginev1betagcssource";
import { GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource } from "./googleclouddiscoveryenginev1betaimportusereventsrequestinlinesource";



// GoogleCloudDiscoveryengineV1betaImportUserEventsRequest
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudDiscoveryengineV1betaImportUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigquerySource" })
  bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=errorConfig" })
  errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;

  @SpeakeasyMetadata({ data: "json, name=inlineSource" })
  inlineSource?: GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
}
