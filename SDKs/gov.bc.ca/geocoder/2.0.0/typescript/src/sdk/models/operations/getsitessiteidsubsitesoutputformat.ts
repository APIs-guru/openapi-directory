import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetSitesSiteIdSubsitesOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetSitesSiteIdSubsitesOutputFormatOutputFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteID" })
  siteId: string;
}

export enum GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}


export class GetSitesSiteIdSubsitesOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetSitesSiteIdSubsitesOutputFormatLocationDescriptorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;
}


export class GetSitesSiteIdSubsitesOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSitesSiteIdSubsitesOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSitesSiteIdSubsitesOutputFormatQueryParams;
}


export class GetSitesSiteIdSubsitesOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
