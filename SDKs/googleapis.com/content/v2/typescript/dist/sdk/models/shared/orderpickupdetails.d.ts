import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";
import { OrderPickupDetailsCollector } from "./orderpickupdetailscollector";
export declare class OrderPickupDetails extends SpeakeasyBase {
    address?: OrderAddress;
    collectors?: OrderPickupDetailsCollector[];
    locationId?: string;
}
