import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaImportErrorsConfig } from "./googlecloudretailv2betaimporterrorsconfig";
import { GoogleCloudRetailV2betaProductInputConfigInput } from "./googlecloudretailv2betaproductinputconfig";
export declare enum GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
**/
export declare class GoogleCloudRetailV2betaImportProductsRequestInput extends SpeakeasyBase {
    errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;
    inputConfig?: GoogleCloudRetailV2betaProductInputConfigInput;
    notificationPubsubTopic?: string;
    reconciliationMode?: GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnum;
    requestId?: string;
    updateMask?: string;
}
