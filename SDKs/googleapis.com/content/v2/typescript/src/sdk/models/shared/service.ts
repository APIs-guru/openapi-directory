import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliveryTime } from "./deliverytime";
import { Price } from "./price";
import { MinimumOrderValueTable } from "./minimumordervaluetable";
import { PickupCarrierService } from "./pickupcarrierservice";
import { RateGroup } from "./rategroup";


export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=deliveryCountry" })
  deliveryCountry?: string;

  @Metadata({ data: "json, name=deliveryTime" })
  deliveryTime?: DeliveryTime;

  @Metadata({ data: "json, name=eligibility" })
  eligibility?: string;

  @Metadata({ data: "json, name=minimumOrderValue" })
  minimumOrderValue?: Price;

  @Metadata({ data: "json, name=minimumOrderValueTable" })
  minimumOrderValueTable?: MinimumOrderValueTable;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pickupService" })
  pickupService?: PickupCarrierService;

  @Metadata({ data: "json, name=rateGroups", elemType: shared.RateGroup })
  rateGroups?: RateGroup[];

  @Metadata({ data: "json, name=shipmentType" })
  shipmentType?: string;
}
