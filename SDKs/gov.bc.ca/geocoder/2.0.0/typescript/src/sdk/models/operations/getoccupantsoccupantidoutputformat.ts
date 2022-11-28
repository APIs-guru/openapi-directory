import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetOccupantsOccupantIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetOccupantsOccupantIdOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=occupantID" })
  occupantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetOccupantsOccupantIdOutputFormatOutputFormatEnum;
}

export enum GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}


export class GetOccupantsOccupantIdOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetOccupantsOccupantIdOutputFormatLocationDescriptorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;
}


export class GetOccupantsOccupantIdOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOccupantsOccupantIdOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOccupantsOccupantIdOutputFormatQueryParams;
}


export class GetOccupantsOccupantIdOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
