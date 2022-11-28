import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedVrf } from "./nestedvrf";



export class AvailablePrefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: number;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
