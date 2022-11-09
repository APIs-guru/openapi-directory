import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetfullnameparsedmatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=firstname" })
  firstname: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastname" })
  lastname: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetfullnameparsedmatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetfullnameparsedmatchQueryParams;
}


export class Getfullnameparsedmatch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetfullnameparsedmatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getfullnameparsedmatch200ApplicationJsonObject?: Getfullnameparsedmatch200ApplicationJson;
}
