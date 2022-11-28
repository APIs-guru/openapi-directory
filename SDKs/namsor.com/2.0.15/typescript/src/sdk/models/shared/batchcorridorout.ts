import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorridorOut } from "./corridorout";



export class BatchCorridorOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corridorFromTo", elemType: CorridorOut })
  corridorFromTo?: CorridorOut[];
}
