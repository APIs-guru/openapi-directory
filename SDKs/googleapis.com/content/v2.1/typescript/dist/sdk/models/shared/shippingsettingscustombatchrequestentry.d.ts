import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingSettings } from "./shippingsettings";
/**
 * A batch entry encoding a single non-batch shippingsettings request.
**/
export declare class ShippingsettingsCustomBatchRequestEntry extends SpeakeasyBase {
    accountId?: string;
    batchId?: number;
    merchantId?: string;
    method?: string;
    shippingSettings?: ShippingSettings;
}
