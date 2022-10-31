package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableNumbersFeaturesEnum string

const (
	GetAvailableNumbersFeaturesEnumSms         GetAvailableNumbersFeaturesEnum = "SMS"
	GetAvailableNumbersFeaturesEnumVoice       GetAvailableNumbersFeaturesEnum = "VOICE"
	GetAvailableNumbersFeaturesEnumSmsVoice    GetAvailableNumbersFeaturesEnum = "SMS,VOICE"
	GetAvailableNumbersFeaturesEnumMms         GetAvailableNumbersFeaturesEnum = "MMS"
	GetAvailableNumbersFeaturesEnumSmsMms      GetAvailableNumbersFeaturesEnum = "SMS,MMS"
	GetAvailableNumbersFeaturesEnumVoiceMms    GetAvailableNumbersFeaturesEnum = "VOICE,MMS"
	GetAvailableNumbersFeaturesEnumSmsMmsVoice GetAvailableNumbersFeaturesEnum = "SMS,MMS,VOICE"
)

type GetAvailableNumbersQueryParams struct {
	Country       string                           `queryParam:"style=form,explode=true,name=country"`
	Features      *GetAvailableNumbersFeaturesEnum `queryParam:"style=form,explode=true,name=features"`
	Index         *int64                           `queryParam:"style=form,explode=true,name=index"`
	Pattern       *string                          `queryParam:"style=form,explode=true,name=pattern"`
	SearchPattern *int64                           `queryParam:"style=form,explode=true,name=search_pattern"`
	Size          *int64                           `queryParam:"style=form,explode=true,name=size"`
	Type          *shared.TypeEnum                 `queryParam:"style=form,explode=true,name=type"`
}

type GetAvailableNumbersRequest struct {
	QueryParams GetAvailableNumbersQueryParams
}

type GetAvailableNumbersResponse struct {
	Body                []byte
	ContentType         string
	StatusCode          int64
	AccountUnauthorized *shared.AccountUnauthorized
	AvailableNumbers    *shared.AvailableNumbers
}
