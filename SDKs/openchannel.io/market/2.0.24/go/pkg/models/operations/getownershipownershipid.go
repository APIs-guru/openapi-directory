package operations

type GetOwnershipOwnershipIDPathParams struct {
	OwnershipID string `pathParam:"style=simple,explode=false,name=ownershipId"`
}

type GetOwnershipOwnershipIDRequest struct {
	PathParams GetOwnershipOwnershipIDPathParams
}

type GetOwnershipOwnershipIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
