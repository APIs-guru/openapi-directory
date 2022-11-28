import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetOccupantsWithinOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetOccupantsWithinOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetOccupantsWithinOutputFormatOutputFormatEnum;
}

export enum GetOccupantsWithinOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}


export class GetOccupantsWithinOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetOccupantsWithinOutputFormatLocationDescriptorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class GetOccupantsWithinOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOccupantsWithinOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOccupantsWithinOutputFormatQueryParams;
}


export class GetOccupantsWithinOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
