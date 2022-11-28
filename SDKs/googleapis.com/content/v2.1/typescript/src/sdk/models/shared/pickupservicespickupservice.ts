import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PickupServicesPickupService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
