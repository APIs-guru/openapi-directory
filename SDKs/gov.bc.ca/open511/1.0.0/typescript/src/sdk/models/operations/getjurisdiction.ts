import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetJurisdictionFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetJurisdictionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetJurisdictionFormatEnum;
}


export class GetJurisdictionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetJurisdictionQueryParams;
}


export class GetJurisdictionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
