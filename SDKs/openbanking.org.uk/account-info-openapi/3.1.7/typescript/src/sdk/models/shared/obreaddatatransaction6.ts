import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObTransaction6 } from "./obtransaction6";


export class ObReadDataTransaction6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Transaction", elemType: shared.ObTransaction6 })
  transaction?: ObTransaction6[];
}
