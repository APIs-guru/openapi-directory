import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAddressesOutputFormatOutputFormatEnum {
    Json = "json"
,    Geojson = "geojson"
,    Xhtml = "xhtml"
,    Kml = "kml"
,    Gml = "gml"
,    Csv = "csv"
,    Shpz = "shpz"
}


export class GetAddressesOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetAddressesOutputFormatOutputFormatEnum;
}

export enum GetAddressesOutputFormatInterpolationEnum {
    Adaptive = "adaptive"
,    Linear = "linear"
,    None = "none"
}

export enum GetAddressesOutputFormatLocationDescriptorEnum {
    Any = "any"
,    AccessPoint = "accessPoint"
,    FrontDoorPoint = "frontDoorPoint"
,    ParcelPoint = "parcelPoint"
,    RooftopPoint = "rooftopPoint"
,    RoutingPoint = "routingPoint"
}

export enum GetAddressesOutputFormatStreetDirectionEnum {
    N = "N"
,    S = "S"
,    E = "E"
,    W = "W"
,    O = "O"
,    Ne = "NE"
,    No = "NO"
,    Nw = "NW"
,    Se = "SE"
,    So = "SO"
,    Sw = "SW"
}

export enum GetAddressesOutputFormatUnitDesignatorEnum {
    Apt = "APT"
,    Bldg = "BLDG"
,    Bsmt = "BSMT"
,    Flr = "FLR"
,    Lobby = "LOBBY"
,    Lwr = "LWR"
,    Pad = "PAD"
,    Ph = "PH"
,    Rear = "REAR"
,    Rm = "RM"
,    Side = "SIDE"
,    Site = "SITE"
,    Suite = "SUITE"
,    Th = "TH"
,    Unit = "UNIT"
,    Uppr = "UPPR"
}


export class GetAddressesOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=addressString" })
  addressString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=autoComplete" })
  autoComplete?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=centre" })
  centre?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=civicNumber" })
  civicNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=civicNumberSuffix" })
  civicNumberSuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=echo" })
  echo?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=extrapolate" })
  extrapolate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interpolation" })
  interpolation?: GetAddressesOutputFormatInterpolationEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=localities" })
  localities?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=localityName" })
  localityName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetAddressesOutputFormatLocationDescriptorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=matchPrecision" })
  matchPrecision?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=matchPrecisionNot" })
  matchPrecisionNot?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minScore" })
  minScore?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=notLocalities" })
  notLocalities?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parcelPoint" })
  parcelPoint?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=provinceCode" })
  provinceCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=siteName" })
  siteName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streetDirection" })
  streetDirection?: GetAddressesOutputFormatStreetDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streetName" })
  streetName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streetQualifier" })
  streetQualifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streetType" })
  streetType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitDesignator" })
  unitDesignator?: GetAddressesOutputFormatUnitDesignatorEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitNumber" })
  unitNumber?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=unitNumberSuffix" })
  unitNumberSuffix?: string;
}


export class GetAddressesOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAddressesOutputFormatPathParams;

  @Metadata()
  queryParams: GetAddressesOutputFormatQueryParams;
}


export class GetAddressesOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
