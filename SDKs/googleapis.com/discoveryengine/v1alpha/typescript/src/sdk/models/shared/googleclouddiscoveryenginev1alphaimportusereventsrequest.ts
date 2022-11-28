import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaBigQuerySource } from "./googleclouddiscoveryenginev1alphabigquerysource";
import { GoogleCloudDiscoveryengineV1alphaImportErrorConfig } from "./googleclouddiscoveryenginev1alphaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1alphaGcsSource } from "./googleclouddiscoveryenginev1alphagcssource";
import { GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource } from "./googleclouddiscoveryenginev1alphaimportusereventsrequestinlinesource";



// GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigquerySource" })
  bigquerySource?: GoogleCloudDiscoveryengineV1alphaBigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=errorConfig" })
  errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDiscoveryengineV1alphaGcsSource;

  @SpeakeasyMetadata({ data: "json, name=inlineSource" })
  inlineSource?: GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource;
}
