import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObAccount6 } from "./obaccount6";



export class ObReadDataAccount5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account", elemType: ObAccount6 })
  account?: ObAccount6[];
}
