import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MerchantOrderReturn } from "./merchantorderreturn";



export class OrderreturnsCreateOrderReturnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionStatus" })
  executionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=orderReturn" })
  orderReturn?: MerchantOrderReturn;
}
