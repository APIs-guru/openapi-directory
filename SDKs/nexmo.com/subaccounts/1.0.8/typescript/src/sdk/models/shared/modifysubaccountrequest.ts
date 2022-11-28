import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifySubaccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_primary_account_balance" })
  usePrimaryAccountBalance?: boolean;
}
