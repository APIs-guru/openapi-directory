import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetOccupantsNearOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetOccupantsNearOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetOccupantsNearOutputFormatOutputFormatEnum;
}

export enum GetOccupantsNearOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}


export class GetOccupantsNearOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetOccupantsNearOutputFormatLocationDescriptorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=point" })
  point: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class GetOccupantsNearOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOccupantsNearOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOccupantsNearOutputFormatQueryParams;
}


export class GetOccupantsNearOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
