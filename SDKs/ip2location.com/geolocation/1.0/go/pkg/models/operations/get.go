package operations

type GetAddonEnum string

const (
	GetAddonEnumContinent        GetAddonEnum = "continent"
	GetAddonEnumCountry          GetAddonEnum = "country"
	GetAddonEnumRegion           GetAddonEnum = "region"
	GetAddonEnumCity             GetAddonEnum = "city"
	GetAddonEnumGeotargeting     GetAddonEnum = "geotargeting"
	GetAddonEnumCountryGroupings GetAddonEnum = "country_groupings"
	GetAddonEnumTimeZoneInfo     GetAddonEnum = "time_zone_info"
)

type GetFormatEnum string

const (
	GetFormatEnumJSON GetFormatEnum = "json"
	GetFormatEnumXML  GetFormatEnum = "xml"
)

type GetLangEnum string

const (
	GetLangEnumAr   GetLangEnum = "ar"
	GetLangEnumCs   GetLangEnum = "cs"
	GetLangEnumDa   GetLangEnum = "da"
	GetLangEnumDe   GetLangEnum = "de"
	GetLangEnumEn   GetLangEnum = "en"
	GetLangEnumEs   GetLangEnum = "es"
	GetLangEnumEt   GetLangEnum = "et"
	GetLangEnumFi   GetLangEnum = "fi"
	GetLangEnumFr   GetLangEnum = "fr"
	GetLangEnumGa   GetLangEnum = "ga"
	GetLangEnumIt   GetLangEnum = "it"
	GetLangEnumJa   GetLangEnum = "ja"
	GetLangEnumKo   GetLangEnum = "ko"
	GetLangEnumMs   GetLangEnum = "ms"
	GetLangEnumNl   GetLangEnum = "nl"
	GetLangEnumPt   GetLangEnum = "pt"
	GetLangEnumRu   GetLangEnum = "ru"
	GetLangEnumSv   GetLangEnum = "sv"
	GetLangEnumTr   GetLangEnum = "tr"
	GetLangEnumVi   GetLangEnum = "vi"
	GetLangEnumZhCn GetLangEnum = "zh-cn"
	GetLangEnumZhTw GetLangEnum = "zh-tw"
)

type GetPackageEnum string

const (
	GetPackageEnumWs1  GetPackageEnum = "WS1"
	GetPackageEnumWs2  GetPackageEnum = "WS2"
	GetPackageEnumWs3  GetPackageEnum = "WS3"
	GetPackageEnumWs4  GetPackageEnum = "WS4"
	GetPackageEnumWs5  GetPackageEnum = "WS5"
	GetPackageEnumWs6  GetPackageEnum = "WS6"
	GetPackageEnumWs7  GetPackageEnum = "WS7"
	GetPackageEnumWs8  GetPackageEnum = "WS8"
	GetPackageEnumWs9  GetPackageEnum = "WS9"
	GetPackageEnumWs10 GetPackageEnum = "WS10"
	GetPackageEnumWs11 GetPackageEnum = "WS11"
	GetPackageEnumWs12 GetPackageEnum = "WS12"
	GetPackageEnumWs13 GetPackageEnum = "WS13"
	GetPackageEnumWs14 GetPackageEnum = "WS14"
	GetPackageEnumWs15 GetPackageEnum = "WS15"
	GetPackageEnumWs16 GetPackageEnum = "WS16"
	GetPackageEnumWs17 GetPackageEnum = "WS17"
	GetPackageEnumWs18 GetPackageEnum = "WS18"
	GetPackageEnumWs19 GetPackageEnum = "WS19"
	GetPackageEnumWs20 GetPackageEnum = "WS20"
	GetPackageEnumWs21 GetPackageEnum = "WS21"
	GetPackageEnumWs22 GetPackageEnum = "WS22"
	GetPackageEnumWs23 GetPackageEnum = "WS23"
	GetPackageEnumWs24 GetPackageEnum = "WS24"
	GetPackageEnumWs25 GetPackageEnum = "WS25"
)

type GetQueryParams struct {
	Addon   []GetAddonEnum  `queryParam:"style=form,explode=false,name=addon"`
	Format  *GetFormatEnum  `queryParam:"style=form,explode=true,name=format"`
	IP      string          `queryParam:"style=form,explode=true,name=ip"`
	Key     string          `queryParam:"style=form,explode=true,name=key"`
	Lang    *GetLangEnum    `queryParam:"style=form,explode=true,name=lang"`
	Package *GetPackageEnum `queryParam:"style=form,explode=true,name=package"`
}

type GetRequest struct {
	QueryParams GetQueryParams
}

type GetResponse struct {
	ContentType                 string
	Get200ApplicationJSONString *string
	StatusCode                  int64
}
