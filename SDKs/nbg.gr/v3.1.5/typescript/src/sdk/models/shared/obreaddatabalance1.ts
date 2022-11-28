import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObCashBalance1 } from "./obcashbalance1";



export class ObReadDataBalance1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Balance", elemType: ObCashBalance1 })
  balance: ObCashBalance1[];
}
