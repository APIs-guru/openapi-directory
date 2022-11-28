import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrderAddress } from "./testorderaddress";
import { TestOrderPickupDetailsPickupPerson } from "./testorderpickupdetailspickupperson";



export class TestOrderPickupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locationCode" })
  locationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupLocationAddress" })
  pickupLocationAddress?: TestOrderAddress;

  @SpeakeasyMetadata({ data: "json, name=pickupLocationType" })
  pickupLocationType?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupPersons", elemType: TestOrderPickupDetailsPickupPerson })
  pickupPersons?: TestOrderPickupDetailsPickupPerson[];
}
