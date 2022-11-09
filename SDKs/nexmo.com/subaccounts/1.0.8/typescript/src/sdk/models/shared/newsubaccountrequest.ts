import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewSubaccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=use_primary_account_balance" })
  usePrimaryAccountBalance?: boolean;
}
