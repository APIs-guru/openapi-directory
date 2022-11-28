import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAddressesOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}


export class GetAddressesOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=outputFormat" })
  outputFormat: GetAddressesOutputFormatOutputFormatEnum;
}

export enum GetAddressesOutputFormatInterpolationEnum {
    Adaptive = "adaptive",
    Linear = "linear",
    None = "none"
}

export enum GetAddressesOutputFormatLocationDescriptorEnum {
    Any = "any",
    AccessPoint = "accessPoint",
    FrontDoorPoint = "frontDoorPoint",
    ParcelPoint = "parcelPoint",
    RooftopPoint = "rooftopPoint",
    RoutingPoint = "routingPoint"
}

export enum GetAddressesOutputFormatStreetDirectionEnum {
    N = "N",
    S = "S",
    E = "E",
    W = "W",
    O = "O",
    Ne = "NE",
    No = "NO",
    Nw = "NW",
    Se = "SE",
    So = "SO",
    Sw = "SW"
}

export enum GetAddressesOutputFormatUnitDesignatorEnum {
    Apt = "APT",
    Bldg = "BLDG",
    Bsmt = "BSMT",
    Flr = "FLR",
    Lobby = "LOBBY",
    Lwr = "LWR",
    Pad = "PAD",
    Ph = "PH",
    Rear = "REAR",
    Rm = "RM",
    Side = "SIDE",
    Site = "SITE",
    Suite = "SUITE",
    Th = "TH",
    Unit = "UNIT",
    Uppr = "UPPR"
}


export class GetAddressesOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addressString" })
  addressString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoComplete" })
  autoComplete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=centre" })
  centre?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=civicNumber" })
  civicNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=civicNumberSuffix" })
  civicNumberSuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=echo" })
  echo?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extrapolate" })
  extrapolate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interpolation" })
  interpolation?: GetAddressesOutputFormatInterpolationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=localities" })
  localities?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=localityName" })
  localityName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationDescriptor" })
  locationDescriptor?: GetAddressesOutputFormatLocationDescriptorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=matchPrecision" })
  matchPrecision?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=matchPrecisionNot" })
  matchPrecisionNot?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDistance" })
  maxDistance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minScore" })
  minScore?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=notLocalities" })
  notLocalities?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" })
  outputSrs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parcelPoint" })
  parcelPoint?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=provinceCode" })
  provinceCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setBack" })
  setBack?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteName" })
  siteName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetDirection" })
  streetDirection?: GetAddressesOutputFormatStreetDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetName" })
  streetName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetQualifier" })
  streetQualifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streetType" })
  streetType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitDesignator" })
  unitDesignator?: GetAddressesOutputFormatUnitDesignatorEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitNumber" })
  unitNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unitNumberSuffix" })
  unitNumberSuffix?: string;
}


export class GetAddressesOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAddressesOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAddressesOutputFormatQueryParams;
}


export class GetAddressesOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
