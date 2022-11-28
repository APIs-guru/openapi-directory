import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetareacodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=areacode" })
  areacode: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license: string;
}


export class Getareacode200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=AreaCode" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Credits" })
  credits?: string;

  @SpeakeasyMetadata({ data: "json, name=Locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryCity" })
  primaryCity?: string;
}


export class GetareacodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetareacodeQueryParams;
}


export class GetareacodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getareacode200ApplicationJsonObject?: Getareacode200ApplicationJson;
}
