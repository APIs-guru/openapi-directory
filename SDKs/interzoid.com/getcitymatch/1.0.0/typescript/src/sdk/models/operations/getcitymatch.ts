import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetcitymatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getcitymatch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetcitymatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetcitymatchQueryParams;
}


export class GetcitymatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getcitymatch200ApplicationJsonObject?: Getcitymatch200ApplicationJson;
}
