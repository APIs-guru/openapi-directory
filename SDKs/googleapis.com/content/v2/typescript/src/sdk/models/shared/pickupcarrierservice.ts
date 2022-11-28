import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PickupCarrierService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
