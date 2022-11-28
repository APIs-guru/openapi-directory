import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingSettings } from "./shippingsettings";
export declare class ShippingsettingsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: ShippingSettings[];
}
