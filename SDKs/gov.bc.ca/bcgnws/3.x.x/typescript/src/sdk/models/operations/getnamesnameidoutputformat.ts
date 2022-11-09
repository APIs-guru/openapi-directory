import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetNamesNameIdOutputFormatOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
,    Kml = "kml"
,    Csv = "csv"
,    Html = "html"
}


export class GetNamesNameIdOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nameId" })
  nameId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetNamesNameIdOutputFormatOutputFormatEnum;
}


export class GetNamesNameIdOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNamesNameIdOutputFormatPathParams;
}


export class GetNamesNameIdOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
