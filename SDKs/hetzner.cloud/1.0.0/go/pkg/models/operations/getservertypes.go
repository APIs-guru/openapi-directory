package operations

type GetServerTypesQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type GetServerTypesRequest struct {
	QueryParams GetServerTypesQueryParams
}

type GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum string

const (
	GetServerTypes200ApplicationJSONServerTypesCPUTypeEnumShared    GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum = "shared"
	GetServerTypes200ApplicationJSONServerTypesCPUTypeEnumDedicated GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum = "dedicated"
)

type GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetServerTypes200ApplicationJSONServerTypesPrices struct {
	Location     string                                                        `json:"location"`
	PriceHourly  GetServerTypes200ApplicationJSONServerTypesPricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetServerTypes200ApplicationJSONServerTypesPricesPriceMonthly `json:"price_monthly"`
}

type GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum string

const (
	GetServerTypes200ApplicationJSONServerTypesStorageTypeEnumLocal   GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum = "local"
	GetServerTypes200ApplicationJSONServerTypesStorageTypeEnumNetwork GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum = "network"
)

type GetServerTypes200ApplicationJSONServerTypes struct {
	Cores       float64                                                    `json:"cores"`
	CPUType     GetServerTypes200ApplicationJSONServerTypesCPUTypeEnum     `json:"cpu_type"`
	Deprecated  bool                                                       `json:"deprecated"`
	Description string                                                     `json:"description"`
	Disk        float64                                                    `json:"disk"`
	ID          float64                                                    `json:"id"`
	Memory      float64                                                    `json:"memory"`
	Name        string                                                     `json:"name"`
	Prices      []GetServerTypes200ApplicationJSONServerTypesPrices        `json:"prices"`
	StorageType GetServerTypes200ApplicationJSONServerTypesStorageTypeEnum `json:"storage_type"`
}

type GetServerTypes200ApplicationJSON struct {
	ServerTypes []GetServerTypes200ApplicationJSONServerTypes `json:"server_types"`
}

type GetServerTypesResponse struct {
	ContentType                            string
	GetServerTypes200ApplicationJSONObject *GetServerTypes200ApplicationJSON
	StatusCode                             int64
}
