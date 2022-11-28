import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetcitystandardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getcitystandard200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CityStandard" })
  cityStandard?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;
}


export class GetcitystandardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetcitystandardQueryParams;
}


export class GetcitystandardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getcitystandard200ApplicationJsonObject?: Getcitystandard200ApplicationJson;
}
