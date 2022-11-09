import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetcountrymatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetcountrymatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetcountrymatchQueryParams;
}


export class Getcountrymatch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetcountrymatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getcountrymatch200ApplicationJsonObject?: Getcountrymatch200ApplicationJson;
}
