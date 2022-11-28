import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ShippingSettings } from "./shippingsettings";
/**
 * A batch entry encoding a single non-batch shipping settings response.
**/
export declare class ShippingsettingsCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    kind?: string;
    shippingSettings?: ShippingSettings;
}
