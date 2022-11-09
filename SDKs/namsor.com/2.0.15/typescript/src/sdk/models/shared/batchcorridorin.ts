import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CorridorIn } from "./corridorin";


export class BatchCorridorIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=corridorFromTo", elemType: shared.CorridorIn })
  corridorFromTo?: CorridorIn[];
}
