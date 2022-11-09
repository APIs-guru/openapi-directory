import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetcitymatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetcitymatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetcitymatchQueryParams;
}


export class Getcitymatch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Simkey" })
  simkey?: string;
}


export class GetcitymatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getcitymatch200ApplicationJsonObject?: Getcitymatch200ApplicationJson;
}
