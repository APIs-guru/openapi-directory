import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetNamesNameIdOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv",
    Html = "html"
}


export class GetNamesNameIdOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nameId" })
  nameId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetNamesNameIdOutputFormatOutputFormatEnum;
}


export class GetNamesNameIdOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNamesNameIdOutputFormatPathParams;
}


export class GetNamesNameIdOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
