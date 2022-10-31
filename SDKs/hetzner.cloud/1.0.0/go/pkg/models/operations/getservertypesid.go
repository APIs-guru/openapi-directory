package operations



type GetServerTypesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetServerTypesIDRequest struct {
    PathParams GetServerTypesIDPathParams 
    
}


type GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum string

const (
    GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnumShared GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum = "shared"
GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnumDedicated GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum = "dedicated"
)


type GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly struct {
    Gross string `json:"gross"`
    Net string `json:"net"`
    
}

type GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly struct {
    Gross string `json:"gross"`
    Net string `json:"net"`
    
}

type GetServerTypesID200ApplicationJSONServerTypePrices struct {
    Location string `json:"location"`
    PriceHourly GetServerTypesID200ApplicationJSONServerTypePricesPriceHourly `json:"price_hourly"`
    PriceMonthly GetServerTypesID200ApplicationJSONServerTypePricesPriceMonthly `json:"price_monthly"`
    
}


type GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum string

const (
    GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnumLocal GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum = "local"
GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnumNetwork GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum = "network"
)


type GetServerTypesID200ApplicationJSONServerType struct {
    Cores float64 `json:"cores"`
    CPUType GetServerTypesID200ApplicationJSONServerTypeCPUTypeEnum `json:"cpu_type"`
    Deprecated bool `json:"deprecated"`
    Description string `json:"description"`
    Disk float64 `json:"disk"`
    ID float64 `json:"id"`
    Memory float64 `json:"memory"`
    Name string `json:"name"`
    Prices []GetServerTypesID200ApplicationJSONServerTypePrices `json:"prices"`
    StorageType GetServerTypesID200ApplicationJSONServerTypeStorageTypeEnum `json:"storage_type"`
    
}

type GetServerTypesID200ApplicationJSON struct {
    ServerType GetServerTypesID200ApplicationJSONServerType `json:"server_type"`
    
}

type GetServerTypesIDResponse struct {
    ContentType string 
    GetServerTypesID200ApplicationJSONObject *GetServerTypesID200ApplicationJSON 
    StatusCode int64 
    
}

