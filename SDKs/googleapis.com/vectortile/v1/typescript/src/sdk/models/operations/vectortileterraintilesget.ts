import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VectortileTerraintilesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum VectortileTerraintilesGetClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    Editor = "EDITOR"
,    MacOs = "MAC_OS"
,    Windows = "WINDOWS"
,    Linux = "LINUX"
,    Android = "ANDROID"
,    Ios = "IOS"
,    WebGl = "WEB_GL"
}

export enum VectortileTerraintilesGetTerrainFormatsEnum {
    TerrainFormatUnknown = "TERRAIN_FORMAT_UNKNOWN"
,    FirstDerivative = "FIRST_DERIVATIVE"
,    SecondDerivative = "SECOND_DERIVATIVE"
}


export class VectortileTerraintilesGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=altitudePrecisionCentimeters" })
  altitudePrecisionCentimeters?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientInfo.apiClient" })
  clientInfoApiClient?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientInfo.applicationId" })
  clientInfoApplicationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientInfo.applicationVersion" })
  clientInfoApplicationVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientInfo.deviceModel" })
  clientInfoDeviceModel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientInfo.operatingSystem" })
  clientInfoOperatingSystem?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientInfo.platform" })
  clientInfoPlatform?: VectortileTerraintilesGetClientInfoPlatformEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientInfo.userId" })
  clientInfoUserId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableModeledVolumes" })
  enableModeledVolumes?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enablePoliticalFeatures" })
  enablePoliticalFeatures?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enablePrivateRoads" })
  enablePrivateRoads?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableUnclippedBuildings" })
  enableUnclippedBuildings?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxElevationResolutionCells" })
  maxElevationResolutionCells?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minElevationResolutionCells" })
  minElevationResolutionCells?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=terrainFormats" })
  terrainFormats?: VectortileTerraintilesGetTerrainFormatsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class VectortileTerraintilesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VectortileTerraintilesGetPathParams;

  @Metadata()
  queryParams: VectortileTerraintilesGetQueryParams;
}


export class VectortileTerraintilesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  terrainTile?: shared.TerrainTile;
}
