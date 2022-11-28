import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObParty2 } from "./obparty2";



export class ObReadDataParty2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Party" })
  party?: ObParty2;
}
