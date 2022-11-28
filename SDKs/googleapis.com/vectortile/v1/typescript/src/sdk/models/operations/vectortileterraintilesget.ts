import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VectortileTerraintilesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum VectortileTerraintilesGetClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Editor = "EDITOR",
    MacOs = "MAC_OS",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Ios = "IOS",
    WebGl = "WEB_GL"
}

export enum VectortileTerraintilesGetTerrainFormatsEnum {
    TerrainFormatUnknown = "TERRAIN_FORMAT_UNKNOWN",
    FirstDerivative = "FIRST_DERIVATIVE",
    SecondDerivative = "SECOND_DERIVATIVE"
}


export class VectortileTerraintilesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=altitudePrecisionCentimeters" })
  altitudePrecisionCentimeters?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientInfo.apiClient" })
  clientInfoApiClient?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientInfo.applicationId" })
  clientInfoApplicationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientInfo.applicationVersion" })
  clientInfoApplicationVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientInfo.deviceModel" })
  clientInfoDeviceModel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientInfo.operatingSystem" })
  clientInfoOperatingSystem?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientInfo.platform" })
  clientInfoPlatform?: VectortileTerraintilesGetClientInfoPlatformEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientInfo.userId" })
  clientInfoUserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableModeledVolumes" })
  enableModeledVolumes?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enablePoliticalFeatures" })
  enablePoliticalFeatures?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enablePrivateRoads" })
  enablePrivateRoads?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUnclippedBuildings" })
  enableUnclippedBuildings?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxElevationResolutionCells" })
  maxElevationResolutionCells?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minElevationResolutionCells" })
  minElevationResolutionCells?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=terrainFormats" })
  terrainFormats?: VectortileTerraintilesGetTerrainFormatsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class VectortileTerraintilesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VectortileTerraintilesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: VectortileTerraintilesGetQueryParams;
}


export class VectortileTerraintilesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  terrainTile?: shared.TerrainTile;
}
