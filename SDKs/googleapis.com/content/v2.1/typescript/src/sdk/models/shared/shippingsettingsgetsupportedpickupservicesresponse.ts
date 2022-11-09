import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PickupServicesPickupService } from "./pickupservicespickupservice";


export class ShippingsettingsGetSupportedPickupServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pickupServices", elemType: shared.PickupServicesPickupService })
  pickupServices?: PickupServicesPickupService[];
}
