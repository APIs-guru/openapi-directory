import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObTransaction6 } from "./obtransaction6";



export class ObReadDataTransaction6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Transaction", elemType: ObTransaction6 })
  transaction?: ObTransaction6[];
}
