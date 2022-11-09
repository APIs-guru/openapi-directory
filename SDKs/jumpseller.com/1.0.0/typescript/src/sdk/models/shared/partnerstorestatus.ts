import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PartnerStoreStatusStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: string;
}


export class PartnerStoreStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: PartnerStoreStatusStatus;
}
