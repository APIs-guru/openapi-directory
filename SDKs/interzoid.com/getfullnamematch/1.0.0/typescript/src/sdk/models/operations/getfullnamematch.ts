import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetfullnamematchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fullname" })
  fullname: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetfullnamematchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetfullnamematchQueryParams;
}


export class Getfullnamematch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetfullnamematchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getfullnamematch200ApplicationJsonObject?: Getfullnamematch200ApplicationJson;
}
