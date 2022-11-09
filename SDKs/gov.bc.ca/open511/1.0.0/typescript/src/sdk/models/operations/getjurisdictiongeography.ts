import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetJurisdictiongeographyFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetJurisdictiongeographyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetJurisdictiongeographyFormatEnum;
}


export class GetJurisdictiongeographyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetJurisdictiongeographyQueryParams;
}


export class GetJurisdictiongeographyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
