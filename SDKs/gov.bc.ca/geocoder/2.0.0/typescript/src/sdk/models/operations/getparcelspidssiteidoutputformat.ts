import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetParcelsPidsSiteIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetParcelsPidsSiteIdOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetParcelsPidsSiteIdOutputFormatOutputFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteID" })
  siteId: string;
}


export class GetParcelsPidsSiteIdOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetParcelsPidsSiteIdOutputFormatPathParams;
}


export class GetParcelsPidsSiteIdOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
