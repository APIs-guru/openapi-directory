import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NiResponseAsync extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_text" })
  errorText?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=remaining_balance" })
  remainingBalance?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=request_price" })
  requestPrice?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;
}
