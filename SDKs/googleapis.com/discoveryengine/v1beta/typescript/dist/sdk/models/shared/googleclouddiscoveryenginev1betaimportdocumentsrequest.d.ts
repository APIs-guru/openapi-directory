import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaBigQuerySource } from "./googleclouddiscoveryenginev1betabigquerysource";
import { GoogleCloudDiscoveryengineV1betaImportErrorConfig } from "./googleclouddiscoveryenginev1betaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1betaGcsSource } from "./googleclouddiscoveryenginev1betagcssource";
import { GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource } from "./googleclouddiscoveryenginev1betaimportdocumentsrequestinlinesource";
export declare enum GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
**/
export declare class GoogleCloudDiscoveryengineV1betaImportDocumentsRequest extends SpeakeasyBase {
    bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource;
    errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;
    gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;
    inlineSource?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;
    reconciliationMode?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum;
}
