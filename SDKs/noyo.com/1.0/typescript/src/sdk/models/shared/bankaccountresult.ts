import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BankAccountResultStatusEnum {
    Created = "created",
    Wiped = "wiped"
}


export class BankAccountResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=bank_name" })
  bankName: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=is_checking" })
  isChecking: boolean;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=routing_number" })
  routingNumber: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: BankAccountResultStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
