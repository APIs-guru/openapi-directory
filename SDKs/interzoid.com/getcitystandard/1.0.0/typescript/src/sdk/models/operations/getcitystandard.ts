import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetcitystandardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=city" })
  city: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetcitystandardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetcitystandardQueryParams;
}


export class Getcitystandard200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=CityStandard" })
  cityStandard?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;
}


export class GetcitystandardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getcitystandard200ApplicationJsonObject?: Getcitystandard200ApplicationJson;
}
