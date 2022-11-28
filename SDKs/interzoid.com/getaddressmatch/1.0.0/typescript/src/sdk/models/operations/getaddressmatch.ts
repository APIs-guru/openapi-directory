import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetaddressmatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getaddressmatch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetaddressmatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetaddressmatchQueryParams;
}


export class GetaddressmatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getaddressmatch200ApplicationJsonObject?: Getaddressmatch200ApplicationJson;
}
