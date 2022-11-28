import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryTime } from "./deliverytime";
import { Price } from "./price";
import { MinimumOrderValueTable } from "./minimumordervaluetable";
import { PickupCarrierService } from "./pickupcarrierservice";
import { RateGroup } from "./rategroup";
export declare class Service extends SpeakeasyBase {
    active?: boolean;
    currency?: string;
    deliveryCountry?: string;
    deliveryTime?: DeliveryTime;
    eligibility?: string;
    minimumOrderValue?: Price;
    minimumOrderValueTable?: MinimumOrderValueTable;
    name?: string;
    pickupService?: PickupCarrierService;
    rateGroups?: RateGroup[];
    shipmentType?: string;
}
