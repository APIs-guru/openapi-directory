import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetfullnamematchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullname" })
  fullname: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getfullnamematch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetfullnamematchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetfullnamematchQueryParams;
}


export class GetfullnamematchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getfullnamematch200ApplicationJsonObject?: Getfullnamematch200ApplicationJson;
}
