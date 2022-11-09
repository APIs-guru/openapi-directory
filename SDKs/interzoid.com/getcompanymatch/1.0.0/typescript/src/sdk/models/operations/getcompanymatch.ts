import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetcompanymatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=company" })
  company: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetcompanymatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetcompanymatchQueryParams;
}


export class Getcompanymatch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetcompanymatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getcompanymatch200ApplicationJsonObject?: Getcompanymatch200ApplicationJson;
}
