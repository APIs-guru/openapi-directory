import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaBigQuerySource } from "./googleclouddiscoveryenginev1alphabigquerysource";
import { GoogleCloudDiscoveryengineV1alphaImportErrorConfig } from "./googleclouddiscoveryenginev1alphaimporterrorconfig";
import { GoogleCloudDiscoveryengineV1alphaGcsSource } from "./googleclouddiscoveryenginev1alphagcssource";
import { GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource } from "./googleclouddiscoveryenginev1alphaimportdocumentsrequestinlinesource";
export declare enum GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
**/
export declare class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest extends SpeakeasyBase {
    bigquerySource?: GoogleCloudDiscoveryengineV1alphaBigQuerySource;
    errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;
    gcsSource?: GoogleCloudDiscoveryengineV1alphaGcsSource;
    inlineSource?: GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource;
    reconciliationMode?: GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum;
}
