package operations

type GetIsosIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetIsosID200ApplicationJSONIsoTypeEnum string

const (
	GetIsosID200ApplicationJSONIsoTypeEnumPublic  GetIsosID200ApplicationJSONIsoTypeEnum = "public"
	GetIsosID200ApplicationJSONIsoTypeEnumPrivate GetIsosID200ApplicationJSONIsoTypeEnum = "private"
)

type GetIsosID200ApplicationJSONIso struct {
	Deprecated  string                                 `json:"deprecated"`
	Description string                                 `json:"description"`
	ID          int64                                  `json:"id"`
	Name        string                                 `json:"name"`
	Type        GetIsosID200ApplicationJSONIsoTypeEnum `json:"type"`
}

type GetIsosID200ApplicationJSON struct {
	Iso GetIsosID200ApplicationJSONIso `json:"iso"`
}

type GetIsosIDRequest struct {
	PathParams GetIsosIDPathParams
}

type GetIsosIDResponse struct {
	ContentType                       string
	GetIsosID200ApplicationJSONObject *GetIsosID200ApplicationJSON
	StatusCode                        int64
}
