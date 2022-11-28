import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderAddress } from "./testorderaddress";
import { TestOrderPickupDetailsPickupPerson } from "./testorderpickupdetailspickupperson";
export declare class TestOrderPickupDetails extends SpeakeasyBase {
    locationCode?: string;
    pickupLocationAddress?: TestOrderAddress;
    pickupLocationType?: string;
    pickupPersons?: TestOrderPickupDetailsPickupPerson[];
}
