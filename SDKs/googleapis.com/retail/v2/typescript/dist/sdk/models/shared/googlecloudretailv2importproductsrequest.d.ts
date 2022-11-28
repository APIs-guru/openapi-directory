import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ImportErrorsConfig } from "./googlecloudretailv2importerrorsconfig";
import { GoogleCloudRetailV2ProductInputConfigInput } from "./googlecloudretailv2productinputconfig";
export declare enum GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum {
    ReconciliationModeUnspecified = "RECONCILIATION_MODE_UNSPECIFIED",
    Incremental = "INCREMENTAL",
    Full = "FULL"
}
/**
 * Request message for Import methods.
**/
export declare class GoogleCloudRetailV2ImportProductsRequestInput extends SpeakeasyBase {
    errorsConfig?: GoogleCloudRetailV2ImportErrorsConfig;
    inputConfig?: GoogleCloudRetailV2ProductInputConfigInput;
    notificationPubsubTopic?: string;
    reconciliationMode?: GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnum;
    requestId?: string;
    updateMask?: string;
}
