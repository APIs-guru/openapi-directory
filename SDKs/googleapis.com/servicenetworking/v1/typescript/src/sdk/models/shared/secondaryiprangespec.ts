import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SecondaryIpRangeSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @Metadata({ data: "json, name=outsideAllocationPublicIpRange" })
  outsideAllocationPublicIpRange?: string;

  @Metadata({ data: "json, name=rangeName" })
  rangeName?: string;

  @Metadata({ data: "json, name=requestedAddress" })
  requestedAddress?: string;
}
