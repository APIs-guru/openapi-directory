import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetSitesWithinOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetSitesWithinOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetSitesWithinOutputFormatOutputFormatEnum;
}

export enum GetSitesWithinOutputFormatLocationDescriptorEnum {
    Any = "any"
,    AccessPoint = "accessPoint"
,    FrontDoorPoint = "frontDoorPoint"
,    ParcelPoint = "parcelPoint"
,    RooftopPoint = "rooftopPoint"
,    RoutingPoint = "routingPoint"
}


export class GetSitesWithinOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeUnits" })
  excludeUnits?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetSitesWithinOutputFormatLocationDescriptorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlyCivic" })
  onlyCivic?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;
}


export class GetSitesWithinOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSitesWithinOutputFormatPathParams;

  @Metadata()
  queryParams: GetSitesWithinOutputFormatQueryParams;
}


export class GetSitesWithinOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
