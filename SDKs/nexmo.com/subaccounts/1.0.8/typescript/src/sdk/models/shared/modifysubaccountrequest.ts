import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifySubaccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @Metadata({ data: "json, name=use_primary_account_balance" })
  usePrimaryAccountBalance?: boolean;
}
