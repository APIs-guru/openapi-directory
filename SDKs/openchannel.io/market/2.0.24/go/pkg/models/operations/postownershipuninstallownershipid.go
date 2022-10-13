package operations

type PostOwnershipUninstallOwnershipIDPathParams struct {
	OwnershipID string `pathParam:"style=simple,explode=false,name=ownershipId"`
}

type PostOwnershipUninstallOwnershipIDQueryParams struct {
	CancelOwnership *bool   `queryParam:"style=form,explode=true,name=cancelOwnership"`
	CustomData      *string `queryParam:"style=form,explode=true,name=customData"`
	UserID          string  `queryParam:"style=form,explode=true,name=userId"`
}

type PostOwnershipUninstallOwnershipIDRequest struct {
	PathParams  PostOwnershipUninstallOwnershipIDPathParams
	QueryParams PostOwnershipUninstallOwnershipIDQueryParams
}

type PostOwnershipUninstallOwnershipIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
