import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetcountrystandardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getcountrystandard200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=CountryStandard" })
  countryStandard?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;
}


export class GetcountrystandardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetcountrystandardQueryParams;
}


export class GetcountrystandardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getcountrystandard200ApplicationJsonObject?: Getcountrystandard200ApplicationJson;
}
