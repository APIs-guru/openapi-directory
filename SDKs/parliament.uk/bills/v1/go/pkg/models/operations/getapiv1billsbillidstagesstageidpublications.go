package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1BillsBillIDStagesStageIDPublicationsPathParams struct {
	BillID  int32 `pathParam:"style=simple,explode=false,name=billId"`
	StageID int32 `pathParam:"style=simple,explode=false,name=stageId"`
}

type GetAPIV1BillsBillIDStagesStageIDPublicationsRequest struct {
	PathParams GetAPIV1BillsBillIDStagesStageIDPublicationsPathParams
}

type GetAPIV1BillsBillIDStagesStageIDPublicationsResponse struct {
	BillStagePublicationList *shared.BillStagePublicationList
	Body                     []byte
	ContentType              string
	ProblemDetails           map[string]interface{}
	StatusCode               int64
}
