package operations

import (
	"openapi/pkg/models/shared"
)

type GetV2CustomerShortNameBranchBranchesBranchIDPathParams struct {
	BranchID  string `pathParam:"style=simple,explode=false,name=branchID"`
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type GetV2CustomerShortNameBranchBranchesBranchIDRequest struct {
	PathParams GetV2CustomerShortNameBranchBranchesBranchIDPathParams
}

type GetV2CustomerShortNameBranchBranchesBranchIDResponse struct {
	Body        []byte
	BranchModel *shared.BranchModel
	ContentType string
	StatusCode  int64
}
