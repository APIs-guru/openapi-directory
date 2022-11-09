import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetcurrencyrateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=symbol" })
  symbol: string;
}


export class GetcurrencyrateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetcurrencyrateQueryParams;
}


export class Getcurrencyrate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Rate" })
  rate?: string;

  @Metadata({ data: "json, name=Symbol" })
  symbol?: string;
}


export class GetcurrencyrateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getcurrencyrate200ApplicationJsonObject?: Getcurrencyrate200ApplicationJson;
}
