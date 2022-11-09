import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SecondaryIpRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipCidrRange" })
  ipCidrRange?: string;

  @Metadata({ data: "json, name=rangeName" })
  rangeName?: string;
}
