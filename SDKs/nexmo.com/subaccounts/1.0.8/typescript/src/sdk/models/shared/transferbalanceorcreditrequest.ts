import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransferBalanceOrCreditRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=to" })
  to: string;
}
