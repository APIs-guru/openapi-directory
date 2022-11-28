import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConvertcurrencyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: string;
}


export class Convertcurrency200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Converted" })
  converted?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: string;
}


export class ConvertcurrencyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ConvertcurrencyQueryParams;
}


export class ConvertcurrencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  convertcurrency200ApplicationJsonObject?: Convertcurrency200ApplicationJson;
}
