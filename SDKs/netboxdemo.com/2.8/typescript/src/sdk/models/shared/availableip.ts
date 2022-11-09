import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedVrf } from "./nestedvrf";


export class AvailableIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=family" })
  family?: number;

  @Metadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
