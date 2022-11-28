import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CorridorIn } from "./corridorin";



export class BatchCorridorIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corridorFromTo", elemType: CorridorIn })
  corridorFromTo?: CorridorIn[];
}
