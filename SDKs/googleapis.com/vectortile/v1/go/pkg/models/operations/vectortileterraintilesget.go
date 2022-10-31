package operations

import (
"openapi/pkg/models/shared")

type VectortileTerraintilesGetPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}


type VectortileTerraintilesGetClientInfoPlatformEnum string

const (
    VectortileTerraintilesGetClientInfoPlatformEnumPlatformUnspecified VectortileTerraintilesGetClientInfoPlatformEnum = "PLATFORM_UNSPECIFIED"
VectortileTerraintilesGetClientInfoPlatformEnumEditor VectortileTerraintilesGetClientInfoPlatformEnum = "EDITOR"
VectortileTerraintilesGetClientInfoPlatformEnumMacOs VectortileTerraintilesGetClientInfoPlatformEnum = "MAC_OS"
VectortileTerraintilesGetClientInfoPlatformEnumWindows VectortileTerraintilesGetClientInfoPlatformEnum = "WINDOWS"
VectortileTerraintilesGetClientInfoPlatformEnumLinux VectortileTerraintilesGetClientInfoPlatformEnum = "LINUX"
VectortileTerraintilesGetClientInfoPlatformEnumAndroid VectortileTerraintilesGetClientInfoPlatformEnum = "ANDROID"
VectortileTerraintilesGetClientInfoPlatformEnumIos VectortileTerraintilesGetClientInfoPlatformEnum = "IOS"
VectortileTerraintilesGetClientInfoPlatformEnumWebGl VectortileTerraintilesGetClientInfoPlatformEnum = "WEB_GL"
)



type VectortileTerraintilesGetTerrainFormatsEnum string

const (
    VectortileTerraintilesGetTerrainFormatsEnumTerrainFormatUnknown VectortileTerraintilesGetTerrainFormatsEnum = "TERRAIN_FORMAT_UNKNOWN"
VectortileTerraintilesGetTerrainFormatsEnumFirstDerivative VectortileTerraintilesGetTerrainFormatsEnum = "FIRST_DERIVATIVE"
VectortileTerraintilesGetTerrainFormatsEnumSecondDerivative VectortileTerraintilesGetTerrainFormatsEnum = "SECOND_DERIVATIVE"
)


type VectortileTerraintilesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AltitudePrecisionCentimeters *int64 `queryParam:"style=form,explode=true,name=altitudePrecisionCentimeters"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ClientInfoAPIClient *string `queryParam:"style=form,explode=true,name=clientInfo.apiClient"`
    ClientInfoApplicationID *string `queryParam:"style=form,explode=true,name=clientInfo.applicationId"`
    ClientInfoApplicationVersion *string `queryParam:"style=form,explode=true,name=clientInfo.applicationVersion"`
    ClientInfoDeviceModel *string `queryParam:"style=form,explode=true,name=clientInfo.deviceModel"`
    ClientInfoOperatingSystem *string `queryParam:"style=form,explode=true,name=clientInfo.operatingSystem"`
    ClientInfoPlatform *VectortileTerraintilesGetClientInfoPlatformEnum `queryParam:"style=form,explode=true,name=clientInfo.platform"`
    ClientInfoUserID *string `queryParam:"style=form,explode=true,name=clientInfo.userId"`
    EnableModeledVolumes *bool `queryParam:"style=form,explode=true,name=enableModeledVolumes"`
    EnablePoliticalFeatures *bool `queryParam:"style=form,explode=true,name=enablePoliticalFeatures"`
    EnablePrivateRoads *bool `queryParam:"style=form,explode=true,name=enablePrivateRoads"`
    EnableUnclippedBuildings *bool `queryParam:"style=form,explode=true,name=enableUnclippedBuildings"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    LanguageCode *string `queryParam:"style=form,explode=true,name=languageCode"`
    MaxElevationResolutionCells *int64 `queryParam:"style=form,explode=true,name=maxElevationResolutionCells"`
    MinElevationResolutionCells *int64 `queryParam:"style=form,explode=true,name=minElevationResolutionCells"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    RegionCode *string `queryParam:"style=form,explode=true,name=regionCode"`
    TerrainFormats []VectortileTerraintilesGetTerrainFormatsEnum `queryParam:"style=form,explode=true,name=terrainFormats"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type VectortileTerraintilesGetRequest struct {
    PathParams VectortileTerraintilesGetPathParams 
    QueryParams VectortileTerraintilesGetQueryParams 
    
}

type VectortileTerraintilesGetResponse struct {
    ContentType string 
    StatusCode int64 
    TerrainTile *shared.TerrainTile 
    
}

