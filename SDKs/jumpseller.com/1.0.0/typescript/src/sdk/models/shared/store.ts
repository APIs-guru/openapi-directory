import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Store extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: any;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=hooks_token" })
  hooksToken?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=weight_unit" })
  weightUnit?: string;
}
