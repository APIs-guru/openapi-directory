import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PickupServicesPickupService } from "./pickupservicespickupservice";



export class ShippingsettingsGetSupportedPickupServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupServices", elemType: PickupServicesPickupService })
  pickupServices?: PickupServicesPickupService[];
}
