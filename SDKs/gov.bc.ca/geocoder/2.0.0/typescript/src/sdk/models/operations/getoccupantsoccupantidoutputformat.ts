import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetOccupantsOccupantIdOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetOccupantsOccupantIdOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=occupantID" })
  occupantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetOccupantsOccupantIdOutputFormatOutputFormatEnum;
}

export enum GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum {
    Any = "any"
,    AccessPoint = "accessPoint"
,    FrontDoorPoint = "frontDoorPoint"
,    ParcelPoint = "parcelPoint"
,    RooftopPoint = "rooftopPoint"
,    RoutingPoint = "routingPoint"
}


export class GetOccupantsOccupantIdOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;
}


export class GetOccupantsOccupantIdOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOccupantsOccupantIdOutputFormatPathParams;

  @Metadata()
  queryParams: GetOccupantsOccupantIdOutputFormatQueryParams;
}


export class GetOccupantsOccupantIdOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
