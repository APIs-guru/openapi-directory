import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetOccupantsNearOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetOccupantsNearOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetOccupantsNearOutputFormatOutputFormatEnum;
}

export enum GetOccupantsNearOutputFormatLocationDescriptorEnum {
    Any = "any"
,    AccessPoint = "accessPoint"
,    FrontDoorPoint = "frontDoorPoint"
,    ParcelPoint = "parcelPoint"
,    RooftopPoint = "rooftopPoint"
,    RoutingPoint = "routingPoint"
}


export class GetOccupantsNearOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetOccupantsNearOutputFormatLocationDescriptorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class GetOccupantsNearOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOccupantsNearOutputFormatPathParams;

  @Metadata()
  queryParams: GetOccupantsNearOutputFormatQueryParams;
}


export class GetOccupantsNearOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
