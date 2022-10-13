package operations

import (
	"openapi/pkg/models/shared"
)

type GenderJapaneseNamePinyinBatchSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GenderJapaneseNamePinyinBatchRequest struct {
	Request  *shared.BatchFirstLastNameIn `request:"mediaType=application/json"`
	Security GenderJapaneseNamePinyinBatchSecurity
}

type GenderJapaneseNamePinyinBatchResponse struct {
	BatchFirstLastNameGenderedOut *shared.BatchFirstLastNameGenderedOut
	ContentType                   string
	StatusCode                    int64
}
