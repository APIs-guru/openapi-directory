import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubaccountCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=credit_limit" })
  creditLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_account_api_key" })
  primaryAccountApiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=use_primary_account_balance" })
  usePrimaryAccountBalance?: boolean;
}
