import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PickupCarrierService extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
