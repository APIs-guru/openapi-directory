import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetglobalnumberinfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=intlnumber" })
  intlnumber: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetglobalnumberinfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetglobalnumberinfoQueryParams;
}


export class Getglobalnumberinfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Language2" })
  language2?: string;

  @Metadata({ data: "json, name=Language3" })
  language3?: string;

  @Metadata({ data: "json, name=Mobile" })
  mobile?: string;

  @Metadata({ data: "json, name=PrimaryCity" })
  primaryCity?: string;

  @Metadata({ data: "json, name=PrimaryLanguage" })
  primaryLanguage?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=Wealth" })
  wealth?: string;
}


export class GetglobalnumberinfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getglobalnumberinfo200ApplicationJsonObject?: Getglobalnumberinfo200ApplicationJson;
}
