import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PickupServicesPickupService extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
