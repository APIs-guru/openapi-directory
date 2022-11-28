import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaBigQuerySource } from "./googleclouddiscoveryenginev1betabigquerysource";
import { GoogleCloudDiscoveryengineV1betaImportErrorConfig } from "./googleclouddiscoveryenginev1betaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1betaGcsSource } from "./googleclouddiscoveryenginev1betagcssource";
import { GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource } from "./googleclouddiscoveryenginev1betaimportusereventsrequestinlinesource";
/**
 * Request message for the ImportUserEvents request.
**/
export declare class GoogleCloudDiscoveryengineV1betaImportUserEventsRequest extends SpeakeasyBase {
    bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource;
    errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;
    inlineSource?: GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
}
