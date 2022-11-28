import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetcountrymatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getcountrymatch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetcountrymatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetcountrymatchQueryParams;
}


export class GetcountrymatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getcountrymatch200ApplicationJsonObject?: Getcountrymatch200ApplicationJson;
}
