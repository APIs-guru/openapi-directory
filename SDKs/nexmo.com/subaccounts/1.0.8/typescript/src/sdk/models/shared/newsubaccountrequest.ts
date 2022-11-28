import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewSubaccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=use_primary_account_balance" })
  usePrimaryAccountBalance?: boolean;
}
