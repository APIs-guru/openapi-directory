import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryTime } from "./deliverytime";
import { Price } from "./price";
import { MinimumOrderValueTable } from "./minimumordervaluetable";
import { PickupCarrierService } from "./pickupcarrierservice";
import { RateGroup } from "./rategroup";



export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryCountry" })
  deliveryCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryTime" })
  deliveryTime?: DeliveryTime;

  @SpeakeasyMetadata({ data: "json, name=eligibility" })
  eligibility?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumOrderValue" })
  minimumOrderValue?: Price;

  @SpeakeasyMetadata({ data: "json, name=minimumOrderValueTable" })
  minimumOrderValueTable?: MinimumOrderValueTable;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupService" })
  pickupService?: PickupCarrierService;

  @SpeakeasyMetadata({ data: "json, name=rateGroups", elemType: RateGroup })
  rateGroups?: RateGroup[];

  @SpeakeasyMetadata({ data: "json, name=shipmentType" })
  shipmentType?: string;
}
