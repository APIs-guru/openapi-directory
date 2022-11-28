import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaProductInputConfigInput } from "./googlecloudretailv2alphaproductinputconfig";
export declare enum GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
**/
export declare class GoogleCloudRetailV2alphaImportProductsRequestInput extends SpeakeasyBase {
    errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;
    inputConfig?: GoogleCloudRetailV2alphaProductInputConfigInput;
    notificationPubsubTopic?: string;
    reconciliationMode?: GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnum;
    requestId?: string;
    skipDefaultBranchProtection?: boolean;
    updateMask?: string;
}
