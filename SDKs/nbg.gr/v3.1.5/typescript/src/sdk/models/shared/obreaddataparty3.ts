import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObParty2 } from "./obparty2";



export class ObReadDataParty3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Party", elemType: ObParty2 })
  party?: ObParty2[];
}
