import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PartnerStoreStatusStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: string;
}


export class PartnerStoreStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PartnerStoreStatusStatus;
}
