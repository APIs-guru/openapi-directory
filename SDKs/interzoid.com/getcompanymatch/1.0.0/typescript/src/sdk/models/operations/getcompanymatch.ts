import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetcompanymatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company" })
  company: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getcompanymatch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetcompanymatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetcompanymatchQueryParams;
}


export class GetcompanymatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getcompanymatch200ApplicationJsonObject?: Getcompanymatch200ApplicationJson;
}
