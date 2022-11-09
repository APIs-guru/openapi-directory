import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObCashBalance1 } from "./obcashbalance1";


export class ObReadDataBalance1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Balance", elemType: shared.ObCashBalance1 })
  balance: ObCashBalance1[];
}
