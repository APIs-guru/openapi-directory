import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConvertcurrencyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class ConvertcurrencyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ConvertcurrencyQueryParams;
}


export class Convertcurrency200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Converted" })
  converted?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Currency" })
  currency?: string;
}


export class ConvertcurrencyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  convertcurrency200ApplicationJsonObject?: Convertcurrency200ApplicationJson;
}
