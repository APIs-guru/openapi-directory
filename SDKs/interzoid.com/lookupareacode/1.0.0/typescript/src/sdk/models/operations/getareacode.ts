import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetareacodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=areacode" })
  areacode: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class GetareacodeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetareacodeQueryParams;
}


export class Getareacode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=AreaCode" })
  areaCode?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Credits" })
  credits?: string;

  @Metadata({ data: "json, name=Locale" })
  locale?: string;

  @Metadata({ data: "json, name=PrimaryCity" })
  primaryCity?: string;
}


export class GetareacodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getareacode200ApplicationJsonObject?: Getareacode200ApplicationJson;
}
