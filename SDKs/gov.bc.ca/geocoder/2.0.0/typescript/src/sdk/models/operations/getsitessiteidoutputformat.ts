import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSitesSiteIdOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetSitesSiteIdOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetSitesSiteIdOutputFormatOutputFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteID" })
  siteId: string;
}

export enum GetSitesSiteIdOutputFormatLocationDescriptorEnum {
    Any = "any"
,    AccessPoint = "accessPoint"
,    FrontDoorPoint = "frontDoorPoint"
,    ParcelPoint = "parcelPoint"
,    RooftopPoint = "rooftopPoint"
,    RoutingPoint = "routingPoint"
}


export class GetSitesSiteIdOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetSitesSiteIdOutputFormatLocationDescriptorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;
}


export class GetSitesSiteIdOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSitesSiteIdOutputFormatPathParams;

  @Metadata()
  queryParams: GetSitesSiteIdOutputFormatQueryParams;
}


export class GetSitesSiteIdOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
