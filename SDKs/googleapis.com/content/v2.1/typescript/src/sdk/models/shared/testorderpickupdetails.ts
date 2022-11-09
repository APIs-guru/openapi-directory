import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestOrderAddress } from "./testorderaddress";
import { TestOrderPickupDetailsPickupPerson } from "./testorderpickupdetailspickupperson";


export class TestOrderPickupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=locationCode" })
  locationCode?: string;

  @Metadata({ data: "json, name=pickupLocationAddress" })
  pickupLocationAddress?: TestOrderAddress;

  @Metadata({ data: "json, name=pickupLocationType" })
  pickupLocationType?: string;

  @Metadata({ data: "json, name=pickupPersons", elemType: shared.TestOrderPickupDetailsPickupPerson })
  pickupPersons?: TestOrderPickupDetailsPickupPerson[];
}
