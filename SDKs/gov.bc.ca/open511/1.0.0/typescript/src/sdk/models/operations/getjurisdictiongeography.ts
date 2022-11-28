import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetJurisdictiongeographyFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetJurisdictiongeographyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetJurisdictiongeographyFormatEnum;
}


export class GetJurisdictiongeographyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetJurisdictiongeographyQueryParams;
}


export class GetJurisdictiongeographyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
