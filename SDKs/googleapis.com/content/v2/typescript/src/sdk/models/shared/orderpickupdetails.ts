import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderAddress } from "./orderaddress";
import { OrderPickupDetailsCollector } from "./orderpickupdetailscollector";


export class OrderPickupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: OrderAddress;

  @Metadata({ data: "json, name=collectors", elemType: shared.OrderPickupDetailsCollector })
  collectors?: OrderPickupDetailsCollector[];

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;
}
