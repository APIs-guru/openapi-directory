import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaBigQuerySource } from "./googleclouddiscoveryenginev1alphabigquerysource";
import { GoogleCloudDiscoveryengineV1alphaImportErrorConfig } from "./googleclouddiscoveryenginev1alphaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1alphaGcsSource } from "./googleclouddiscoveryenginev1alphagcssource";
import { GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource } from "./googleclouddiscoveryenginev1alphaimportusereventsrequestinlinesource";
/**
 * Request message for the ImportUserEvents request.
**/
export declare class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest extends SpeakeasyBase {
    bigquerySource?: GoogleCloudDiscoveryengineV1alphaBigQuerySource;
    errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    gcsSource?: GoogleCloudDiscoveryengineV1alphaGcsSource;
    inlineSource?: GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource;
}
