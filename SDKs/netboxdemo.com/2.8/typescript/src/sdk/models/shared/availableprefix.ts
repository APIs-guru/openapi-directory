import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedVrf } from "./nestedvrf";


export class AvailablePrefix extends SpeakeasyBase {
  @Metadata({ data: "json, name=family" })
  family?: number;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
