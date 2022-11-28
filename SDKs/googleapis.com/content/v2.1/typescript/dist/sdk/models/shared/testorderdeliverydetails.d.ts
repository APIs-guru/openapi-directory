import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderAddress } from "./testorderaddress";
export declare class TestOrderDeliveryDetails extends SpeakeasyBase {
    address?: TestOrderAddress;
    isScheduledDelivery?: boolean;
    phoneNumber?: string;
}
