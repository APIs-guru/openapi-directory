package operations

import (
	"openapi/pkg/models/shared"
)

type CivicinfoElectionsVoterInfoQueryQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Address                string            `queryParam:"style=form,explode=true,name=address"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	ElectionID             *string           `queryParam:"style=form,explode=true,name=electionId"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OfficialOnly           *bool             `queryParam:"style=form,explode=true,name=officialOnly"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReturnAllAvailableData *bool             `queryParam:"style=form,explode=true,name=returnAllAvailableData"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CivicinfoElectionsVoterInfoQueryRequest struct {
	QueryParams CivicinfoElectionsVoterInfoQueryQueryParams
}

type CivicinfoElectionsVoterInfoQueryResponse struct {
	ContentType       string
	StatusCode        int64
	VoterInfoResponse *shared.VoterInfoResponse
}
