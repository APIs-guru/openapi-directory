import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VectortileTerraintilesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum VectortileTerraintilesGetClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Editor = "EDITOR",
    MacOs = "MAC_OS",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Ios = "IOS",
    WebGl = "WEB_GL"
}
export declare enum VectortileTerraintilesGetTerrainFormatsEnum {
    TerrainFormatUnknown = "TERRAIN_FORMAT_UNKNOWN",
    FirstDerivative = "FIRST_DERIVATIVE",
    SecondDerivative = "SECOND_DERIVATIVE"
}
export declare class VectortileTerraintilesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    altitudePrecisionCentimeters?: number;
    callback?: string;
    clientInfoApiClient?: string;
    clientInfoApplicationId?: string;
    clientInfoApplicationVersion?: string;
    clientInfoDeviceModel?: string;
    clientInfoOperatingSystem?: string;
    clientInfoPlatform?: VectortileTerraintilesGetClientInfoPlatformEnum;
    clientInfoUserId?: string;
    enableModeledVolumes?: boolean;
    enablePoliticalFeatures?: boolean;
    enablePrivateRoads?: boolean;
    enableUnclippedBuildings?: boolean;
    fields?: string;
    key?: string;
    languageCode?: string;
    maxElevationResolutionCells?: number;
    minElevationResolutionCells?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionCode?: string;
    terrainFormats?: VectortileTerraintilesGetTerrainFormatsEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class VectortileTerraintilesGetRequest extends SpeakeasyBase {
    pathParams: VectortileTerraintilesGetPathParams;
    queryParams: VectortileTerraintilesGetQueryParams;
}
export declare class VectortileTerraintilesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    terrainTile?: shared.TerrainTile;
}
