import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetOccupantsNearestOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetOccupantsNearestOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetOccupantsNearestOutputFormatOutputFormatEnum;
}

export enum GetOccupantsNearestOutputFormatLocationDescriptorEnum {
    Any = "any"
,    AccessPoint = "accessPoint"
,    FrontDoorPoint = "frontDoorPoint"
,    ParcelPoint = "parcelPoint"
,    RooftopPoint = "rooftopPoint"
,    RoutingPoint = "routingPoint"
}


export class GetOccupantsNearestOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetOccupantsNearestOutputFormatLocationDescriptorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class GetOccupantsNearestOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOccupantsNearestOutputFormatPathParams;

  @Metadata()
  queryParams: GetOccupantsNearestOutputFormatQueryParams;
}


export class GetOccupantsNearestOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
