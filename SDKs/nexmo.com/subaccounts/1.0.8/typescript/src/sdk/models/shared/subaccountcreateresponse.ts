import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubaccountCreateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_key" })
  apiKey?: string;

  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=credit_limit" })
  creditLimit?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primary_account_api_key" })
  primaryAccountApiKey?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @Metadata({ data: "json, name=use_primary_account_balance" })
  usePrimaryAccountBalance?: boolean;
}
