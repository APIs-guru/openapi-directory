import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetaddressmatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=address" })
  address: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetaddressmatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetaddressmatchQueryParams;
}


export class Getaddressmatch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetaddressmatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getaddressmatch200ApplicationJsonObject?: Getaddressmatch200ApplicationJson;
}
