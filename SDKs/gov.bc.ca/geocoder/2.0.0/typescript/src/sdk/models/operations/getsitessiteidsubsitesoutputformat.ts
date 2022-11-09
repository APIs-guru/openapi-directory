import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetSitesSiteIdSubsitesOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=siteID" })
  siteId: string;
}

export enum GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum {
    Any = "any"
,    AccessPoint = "accessPoint"
,    FrontDoorPoint = "frontDoorPoint"
,    ParcelPoint = "parcelPoint"
,    RooftopPoint = "rooftopPoint"
,    RoutingPoint = "routingPoint"
}


export class GetSitesSiteIdSubsitesOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;
}


export class GetSitesSiteIdSubsitesOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSitesSiteIdSubsitesOutputFormatPathParams;

  @Metadata()
  queryParams: GetSitesSiteIdSubsitesOutputFormatQueryParams;
}


export class GetSitesSiteIdSubsitesOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
