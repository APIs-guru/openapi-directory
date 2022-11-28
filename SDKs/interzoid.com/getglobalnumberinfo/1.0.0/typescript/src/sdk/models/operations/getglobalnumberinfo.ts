import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetglobalnumberinfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=intlnumber" })
  intlnumber: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getglobalnumberinfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Language2" })
  language2?: string;

  @SpeakeasyMetadata({ data: "json, name=Language3" })
  language3?: string;

  @SpeakeasyMetadata({ data: "json, name=Mobile" })
  mobile?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryCity" })
  primaryCity?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryLanguage" })
  primaryLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=Wealth" })
  wealth?: string;
}


export class GetglobalnumberinfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetglobalnumberinfoQueryParams;
}


export class GetglobalnumberinfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getglobalnumberinfo200ApplicationJsonObject?: Getglobalnumberinfo200ApplicationJson;
}
