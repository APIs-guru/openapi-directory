import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedVrf } from "./nestedvrf";



export class AvailableIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: number;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
