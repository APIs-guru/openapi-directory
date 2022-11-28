import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetcurrencyrateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=symbol" })
  symbol: string;
}


export class Getcurrencyrate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=Symbol" })
  symbol?: string;
}


export class GetcurrencyrateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetcurrencyrateQueryParams;
}


export class GetcurrencyrateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getcurrencyrate200ApplicationJsonObject?: Getcurrencyrate200ApplicationJson;
}
