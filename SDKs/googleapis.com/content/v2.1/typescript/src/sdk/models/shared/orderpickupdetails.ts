import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";
import { OrderPickupDetailsCollector } from "./orderpickupdetailscollector";



export class OrderPickupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: OrderAddress;

  @SpeakeasyMetadata({ data: "json, name=collectors", elemType: OrderPickupDetailsCollector })
  collectors?: OrderPickupDetailsCollector[];

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupType" })
  pickupType?: string;
}
