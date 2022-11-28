import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NiResponseAsync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_text" })
  errorText?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=remaining_balance" })
  remainingBalance?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=request_price" })
  requestPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;
}
