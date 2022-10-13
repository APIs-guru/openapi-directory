package operations

import (
	"openapi/pkg/models/shared"
)

type MybusinessqandaLocationsQuestionsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MybusinessqandaLocationsQuestionsListQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AnswersPerQuestion *int64            `queryParam:"style=form,explode=true,name=answersPerQuestion"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter             *string           `queryParam:"style=form,explode=true,name=filter"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy            *string           `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize           *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken          *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type MybusinessqandaLocationsQuestionsListRequest struct {
	PathParams  MybusinessqandaLocationsQuestionsListPathParams
	QueryParams MybusinessqandaLocationsQuestionsListQueryParams
}

type MybusinessqandaLocationsQuestionsListResponse struct {
	ContentType           string
	ListQuestionsResponse *shared.ListQuestionsResponse
	StatusCode            int64
}
