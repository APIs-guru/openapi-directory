package operations



type GetExportThermalPrintBelegeBelegUUIDPathParams struct {
    BelegUUID string `pathParam:"style=simple,explode=false,name=belegUuid"`
    
}


type GetExportThermalPrintBelegeBelegUUIDDialectEnum string

const (
    GetExportThermalPrintBelegeBelegUUIDDialectEnumEscpos GetExportThermalPrintBelegeBelegUUIDDialectEnum = "escpos"
GetExportThermalPrintBelegeBelegUUIDDialectEnumEscposlite GetExportThermalPrintBelegeBelegUUIDDialectEnum = "escposlite"
GetExportThermalPrintBelegeBelegUUIDDialectEnumStar GetExportThermalPrintBelegeBelegUUIDDialectEnum = "star"
GetExportThermalPrintBelegeBelegUUIDDialectEnumText GetExportThermalPrintBelegeBelegUUIDDialectEnum = "text"
)



type GetExportThermalPrintBelegeBelegUUIDEncodingEnum string

const (
    GetExportThermalPrintBelegeBelegUUIDEncodingEnumRaw GetExportThermalPrintBelegeBelegUUIDEncodingEnum = "raw"
GetExportThermalPrintBelegeBelegUUIDEncodingEnumBase64 GetExportThermalPrintBelegeBelegUUIDEncodingEnum = "base64"
)


type GetExportThermalPrintBelegeBelegUUIDQueryParams struct {
    Dialect *GetExportThermalPrintBelegeBelegUUIDDialectEnum `queryParam:"style=form,explode=true,name=dialect"`
    Encoding *GetExportThermalPrintBelegeBelegUUIDEncodingEnum `queryParam:"style=form,explode=true,name=encoding"`
    Qr *bool `queryParam:"style=form,explode=true,name=qr"`
    Width *int64 `queryParam:"style=form,explode=true,name=width"`
    
}

type GetExportThermalPrintBelegeBelegUUIDRequest struct {
    PathParams GetExportThermalPrintBelegeBelegUUIDPathParams 
    QueryParams GetExportThermalPrintBelegeBelegUUIDQueryParams 
    
}

type GetExportThermalPrintBelegeBelegUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

