import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MerchantOrderReturn } from "./merchantorderreturn";


export class OrderreturnsCreateOrderReturnResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionStatus" })
  executionStatus?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=orderReturn" })
  orderReturn?: MerchantOrderReturn;
}
