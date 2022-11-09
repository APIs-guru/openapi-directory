import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObParty2 } from "./obparty2";


export class ObReadDataParty2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Party" })
  party?: ObParty2;
}
