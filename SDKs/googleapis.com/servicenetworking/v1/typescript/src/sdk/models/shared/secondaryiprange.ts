import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SecondaryIpRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @SpeakeasyMetadata({ data: "json, name=rangeName" })
  rangeName?: string;
}
