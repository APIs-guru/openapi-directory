import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CorridorOut } from "./corridorout";


export class BatchCorridorOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=corridorFromTo", elemType: shared.CorridorOut })
  corridorFromTo?: CorridorOut[];
}
