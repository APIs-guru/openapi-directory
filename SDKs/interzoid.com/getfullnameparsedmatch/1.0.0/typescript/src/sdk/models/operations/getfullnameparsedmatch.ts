import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetfullnameparsedmatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstname" })
  firstname: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastname" })
  lastname: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getfullnameparsedmatch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetfullnameparsedmatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetfullnameparsedmatchQueryParams;
}


export class GetfullnameparsedmatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getfullnameparsedmatch200ApplicationJsonObject?: Getfullnameparsedmatch200ApplicationJson;
}
