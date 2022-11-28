import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SecondaryIpRangeSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=outsideAllocationPublicIpRange" })
  outsideAllocationPublicIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeName" })
  rangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedAddress" })
  requestedAddress?: string;
}
