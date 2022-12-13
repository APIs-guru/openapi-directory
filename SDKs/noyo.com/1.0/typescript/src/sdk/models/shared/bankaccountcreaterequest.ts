import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BankAccountCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=bank_name" })
  bankName: string;

  @SpeakeasyMetadata({ data: "json, name=is_checking" })
  isChecking: boolean;

  @SpeakeasyMetadata({ data: "json, name=routing_number" })
  routingNumber: string;
}
