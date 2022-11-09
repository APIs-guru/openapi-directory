import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObAccount6 } from "./obaccount6";


export class ObReadDataAccount5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account", elemType: shared.ObAccount6 })
  account?: ObAccount6[];
}
