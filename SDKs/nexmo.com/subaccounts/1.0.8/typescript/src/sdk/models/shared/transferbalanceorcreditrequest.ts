import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransferBalanceOrCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string;
}
