package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetRecordsDirectionEnum string

const (
	GetRecordsDirectionEnumInbound  GetRecordsDirectionEnum = "inbound"
	GetRecordsDirectionEnumOutbound GetRecordsDirectionEnum = "outbound"
)

type GetRecordsProductEnum string

const (
	GetRecordsProductEnumSms           GetRecordsProductEnum = "SMS"
	GetRecordsProductEnumVoiceCall     GetRecordsProductEnum = "VOICE-CALL"
	GetRecordsProductEnumVoiceFailed   GetRecordsProductEnum = "VOICE-FAILED"
	GetRecordsProductEnumInAppVoice    GetRecordsProductEnum = "IN-APP-VOICE"
	GetRecordsProductEnumWebsocketCall GetRecordsProductEnum = "WEBSOCKET-CALL"
	GetRecordsProductEnumVerifyAPI     GetRecordsProductEnum = "VERIFY-API"
	GetRecordsProductEnumNumberInsight GetRecordsProductEnum = "NUMBER-INSIGHT"
	GetRecordsProductEnumMessages      GetRecordsProductEnum = "MESSAGES"
	GetRecordsProductEnumAsr           GetRecordsProductEnum = "ASR"
	GetRecordsProductEnumConversations GetRecordsProductEnum = "CONVERSATIONS"
	GetRecordsProductEnumReportsUsage  GetRecordsProductEnum = "REPORTS-USAGE"
)

type GetRecordsStatusEnum string

const (
	GetRecordsStatusEnumDelivered GetRecordsStatusEnum = "delivered"
	GetRecordsStatusEnumExpired   GetRecordsStatusEnum = "expired"
	GetRecordsStatusEnumFailed    GetRecordsStatusEnum = "failed"
	GetRecordsStatusEnumRejected  GetRecordsStatusEnum = "rejected"
	GetRecordsStatusEnumAccepted  GetRecordsStatusEnum = "accepted"
	GetRecordsStatusEnumBuffered  GetRecordsStatusEnum = "buffered"
	GetRecordsStatusEnumUnknown   GetRecordsStatusEnum = "unknown"
	GetRecordsStatusEnumDeleted   GetRecordsStatusEnum = "deleted"
)

type GetRecordsQueryParams struct {
	AccountID        string                   `queryParam:"style=form,explode=true,name=account_id"`
	DateEnd          *time.Time               `queryParam:"style=form,explode=true,name=date_end"`
	DateStart        *time.Time               `queryParam:"style=form,explode=true,name=date_start"`
	Direction        *GetRecordsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	ID               *string                  `queryParam:"style=form,explode=true,name=id"`
	IncludeMessage   *bool                    `queryParam:"style=form,explode=true,name=include_message"`
	Product          GetRecordsProductEnum    `queryParam:"style=form,explode=true,name=product"`
	ShowConcatenated *bool                    `queryParam:"style=form,explode=true,name=show_concatenated"`
	Status           *GetRecordsStatusEnum    `queryParam:"style=form,explode=true,name=status"`
}

type GetRecordsSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type GetRecordsRequest struct {
	QueryParams GetRecordsQueryParams
	Security    GetRecordsSecurity
}

type GetRecords200ApplicationJSON1LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON1Links struct {
	Self *GetRecords200ApplicationJSON1LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON1DirectionEnum string

const (
	GetRecords200ApplicationJSON1DirectionEnumInbound  GetRecords200ApplicationJSON1DirectionEnum = "inbound"
	GetRecords200ApplicationJSON1DirectionEnumOutbound GetRecords200ApplicationJSON1DirectionEnum = "outbound"
)

type GetRecords200ApplicationJSON1 struct {
	Links            *GetRecords200ApplicationJSON1Links         `json:"_links"`
	AccountID        *string                                     `json:"account_id"`
	Currency         *string                                     `json:"currency"`
	Direction        *GetRecords200ApplicationJSON1DirectionEnum `json:"direction"`
	IdsNotFound      *string                                     `json:"ids_not_found"`
	IncludeMessage   *bool                                       `json:"include_message"`
	ItemsCount       *int64                                      `json:"items_count"`
	Price            *float64                                    `json:"price"`
	Product          *shared.ProductSmsEnum                      `json:"product"`
	ReceivedAt       *time.Time                                  `json:"received_at"`
	Records          []shared.JSONSmsOutboundWithBody            `json:"records"`
	RequestID        *string                                     `json:"request_id"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status"`
	ShowConcatenated *bool                                       `json:"show_concatenated"`
}

type GetRecords200ApplicationJSON2LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON2Links struct {
	Self *GetRecords200ApplicationJSON2LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON2DirectionEnum string

const (
	GetRecords200ApplicationJSON2DirectionEnumInbound  GetRecords200ApplicationJSON2DirectionEnum = "inbound"
	GetRecords200ApplicationJSON2DirectionEnumOutbound GetRecords200ApplicationJSON2DirectionEnum = "outbound"
)

type GetRecords200ApplicationJSON2 struct {
	Links            *GetRecords200ApplicationJSON2Links         `json:"_links"`
	AccountID        *string                                     `json:"account_id"`
	Currency         *string                                     `json:"currency"`
	Direction        *GetRecords200ApplicationJSON2DirectionEnum `json:"direction"`
	IdsNotFound      *string                                     `json:"ids_not_found"`
	IncludeMessage   *bool                                       `json:"include_message"`
	ItemsCount       *int64                                      `json:"items_count"`
	Price            *float64                                    `json:"price"`
	Product          *shared.ProductSmsEnum                      `json:"product"`
	ReceivedAt       *time.Time                                  `json:"received_at"`
	Records          []shared.JSONSmsInboundWithBody             `json:"records"`
	RequestID        *string                                     `json:"request_id"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status"`
	ShowConcatenated *bool                                       `json:"show_concatenated"`
}

type GetRecords200ApplicationJSON3LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON3Links struct {
	Self *GetRecords200ApplicationJSON3LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON3 struct {
	Links         *GetRecords200ApplicationJSON3Links `json:"_links"`
	AccountID     *string                             `json:"account_id"`
	Currency      *string                             `json:"currency"`
	Direction     *shared.DirectionEnum               `json:"direction"`
	IdsNotFound   *string                             `json:"ids_not_found"`
	ItemsCount    *int64                              `json:"items_count"`
	Price         *float64                            `json:"price"`
	Product       *shared.ProductVoiceEnum            `json:"product"`
	ReceivedAt    *time.Time                          `json:"received_at"`
	Records       []shared.CsvVoice                   `json:"records"`
	RequestID     *string                             `json:"request_id"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status"`
}

type GetRecords200ApplicationJSON4LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON4Links struct {
	Self *GetRecords200ApplicationJSON4LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON4 struct {
	Links         *GetRecords200ApplicationJSON4Links `json:"_links"`
	AccountID     *string                             `json:"account_id"`
	Currency      *string                             `json:"currency"`
	IdsNotFound   *string                             `json:"ids_not_found"`
	ItemsCount    *int64                              `json:"items_count"`
	Price         *float64                            `json:"price"`
	Product       *shared.ProductInAppVoiceEnum       `json:"product"`
	ReceivedAt    *time.Time                          `json:"received_at"`
	Records       []shared.CsvInAppVoice              `json:"records"`
	RequestID     *string                             `json:"request_id"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status"`
}

type GetRecords200ApplicationJSON5LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON5Links struct {
	Self *GetRecords200ApplicationJSON5LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON5 struct {
	Links         *GetRecords200ApplicationJSON5Links `json:"_links"`
	AccountID     *string                             `json:"account_id"`
	Currency      *string                             `json:"currency"`
	IdsNotFound   *string                             `json:"ids_not_found"`
	ItemsCount    *int64                              `json:"items_count"`
	Price         *float64                            `json:"price"`
	Product       *shared.ProductWebsocketEnum        `json:"product"`
	ReceivedAt    *time.Time                          `json:"received_at"`
	Records       []shared.CsvWebsockets              `json:"records"`
	RequestID     *string                             `json:"request_id"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status"`
}

type GetRecords200ApplicationJSON6LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON6Links struct {
	Self *GetRecords200ApplicationJSON6LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON6 struct {
	Links         *GetRecords200ApplicationJSON6Links `json:"_links"`
	AccountID     *string                             `json:"account_id"`
	Currency      *string                             `json:"currency"`
	IdsNotFound   *string                             `json:"ids_not_found"`
	ItemsCount    *int64                              `json:"items_count"`
	Price         *float64                            `json:"price"`
	Product       *shared.ProductVerifyEnum           `json:"product"`
	ReceivedAt    *time.Time                          `json:"received_at"`
	Records       []shared.CsvVerify                  `json:"records"`
	RequestID     *string                             `json:"request_id"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status"`
}

type GetRecords200ApplicationJSON7LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON7Links struct {
	Self *GetRecords200ApplicationJSON7LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON7 struct {
	Links         *GetRecords200ApplicationJSON7Links `json:"_links"`
	AccountID     *string                             `json:"account_id"`
	Currency      *string                             `json:"currency"`
	IdsNotFound   *string                             `json:"ids_not_found"`
	ItemsCount    *int64                              `json:"items_count"`
	Price         *float64                            `json:"price"`
	Product       *shared.ProductNiEnum               `json:"product"`
	ReceivedAt    *time.Time                          `json:"received_at"`
	Records       []shared.CsvNi                      `json:"records"`
	RequestID     *string                             `json:"request_id"`
	RequestStatus *shared.RequestStatusEnum           `json:"request_status"`
}

type GetRecords200ApplicationJSON8LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON8Links struct {
	Self *GetRecords200ApplicationJSON8LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON8DirectionEnum string

const (
	GetRecords200ApplicationJSON8DirectionEnumInbound  GetRecords200ApplicationJSON8DirectionEnum = "inbound"
	GetRecords200ApplicationJSON8DirectionEnumOutbound GetRecords200ApplicationJSON8DirectionEnum = "outbound"
)

type GetRecords200ApplicationJSON8 struct {
	Links            *GetRecords200ApplicationJSON8Links         `json:"_links"`
	AccountID        *string                                     `json:"account_id"`
	Currency         *string                                     `json:"currency"`
	Direction        *GetRecords200ApplicationJSON8DirectionEnum `json:"direction"`
	IdsNotFound      *string                                     `json:"ids_not_found"`
	IncludeMessage   *bool                                       `json:"include_message"`
	ItemsCount       *int64                                      `json:"items_count"`
	Price            *float64                                    `json:"price"`
	Product          *shared.ProductMessagesEnum                 `json:"product"`
	ReceivedAt       *time.Time                                  `json:"received_at"`
	Records          []shared.CsvMessagesOutbound                `json:"records"`
	RequestID        *string                                     `json:"request_id"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status"`
	ShowConcatenated *bool                                       `json:"show_concatenated"`
}

type GetRecords200ApplicationJSON9LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON9Links struct {
	Self *GetRecords200ApplicationJSON9LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON9DirectionEnum string

const (
	GetRecords200ApplicationJSON9DirectionEnumInbound  GetRecords200ApplicationJSON9DirectionEnum = "inbound"
	GetRecords200ApplicationJSON9DirectionEnumOutbound GetRecords200ApplicationJSON9DirectionEnum = "outbound"
)

type GetRecords200ApplicationJSON9 struct {
	Links            *GetRecords200ApplicationJSON9Links         `json:"_links"`
	AccountID        *string                                     `json:"account_id"`
	Currency         *string                                     `json:"currency"`
	Direction        *GetRecords200ApplicationJSON9DirectionEnum `json:"direction"`
	IdsNotFound      *string                                     `json:"ids_not_found"`
	IncludeMessage   *bool                                       `json:"include_message"`
	ItemsCount       *int64                                      `json:"items_count"`
	Price            *float64                                    `json:"price"`
	Product          *shared.ProductMessagesEnum                 `json:"product"`
	ReceivedAt       *time.Time                                  `json:"received_at"`
	Records          []shared.CsvMessagesInbound                 `json:"records"`
	RequestID        *string                                     `json:"request_id"`
	RequestStatus    *shared.RequestStatusEnum                   `json:"request_status"`
	ShowConcatenated *bool                                       `json:"show_concatenated"`
}

type GetRecords200ApplicationJSON10LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON10Links struct {
	Self *GetRecords200ApplicationJSON10LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON10 struct {
	Links         *GetRecords200ApplicationJSON10Links `json:"_links"`
	AccountID     *string                              `json:"account_id"`
	Currency      *string                              `json:"currency"`
	IdsNotFound   *string                              `json:"ids_not_found"`
	ItemsCount    *int64                               `json:"items_count"`
	Price         *float64                             `json:"price"`
	Product       *shared.ProductAsrEnum               `json:"product"`
	ReceivedAt    *time.Time                           `json:"received_at"`
	Records       []shared.CsvAsr                      `json:"records"`
	RequestID     *string                              `json:"request_id"`
	RequestStatus *shared.RequestStatusEnum            `json:"request_status"`
}

type GetRecords200ApplicationJSON11LinksSelf struct {
	Href *string `json:"href"`
}

type GetRecords200ApplicationJSON11Links struct {
	Self *GetRecords200ApplicationJSON11LinksSelf `json:"self"`
}

type GetRecords200ApplicationJSON11 struct {
	Links         *GetRecords200ApplicationJSON11Links `json:"_links"`
	AccountID     *string                              `json:"account_id"`
	Currency      *string                              `json:"currency"`
	IdsNotFound   *string                              `json:"ids_not_found"`
	ItemsCount    *int64                               `json:"items_count"`
	Price         *float64                             `json:"price"`
	Product       *shared.ProductConversationsEnum     `json:"product"`
	ReceivedAt    *time.Time                           `json:"received_at"`
	Records       []shared.CsvConversations            `json:"records"`
	RequestID     *string                              `json:"request_id"`
	RequestStatus *shared.RequestStatusEnum            `json:"request_status"`
}

type GetRecordsResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetRecords200ApplicationJSONOneOf *interface{}
	GetRecords403ApplicationJSONAny   *interface{}
	GetRecords422ApplicationJSONOneOf *interface{}
}
