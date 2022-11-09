import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetcountrystandardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetcountrystandardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetcountrystandardQueryParams;
}


export class Getcountrystandard200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=CountryStandard" })
  countryStandard?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;
}


export class GetcountrystandardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getcountrystandard200ApplicationJsonObject?: Getcountrystandard200ApplicationJson;
}
