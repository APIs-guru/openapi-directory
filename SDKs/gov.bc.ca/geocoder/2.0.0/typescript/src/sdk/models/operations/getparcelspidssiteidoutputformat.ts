import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetParcelsPidsSiteIdOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetParcelsPidsSiteIdOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetParcelsPidsSiteIdOutputFormatOutputFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteID" })
  siteId: string;
}


export class GetParcelsPidsSiteIdOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetParcelsPidsSiteIdOutputFormatPathParams;
}


export class GetParcelsPidsSiteIdOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
