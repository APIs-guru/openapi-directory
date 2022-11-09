import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObParty2 } from "./obparty2";


export class ObReadDataParty3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Party", elemType: shared.ObParty2 })
  party?: ObParty2[];
}
