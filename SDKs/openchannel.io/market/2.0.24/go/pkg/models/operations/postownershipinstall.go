package operations

type PostOwnershipInstallQueryParams struct {
	AppID      string  `queryParam:"style=form,explode=true,name=appId"`
	CustomData *string `queryParam:"style=form,explode=true,name=customData"`
	Model      *string `queryParam:"style=form,explode=true,name=model"`
	ModelID    *string `queryParam:"style=form,explode=true,name=modelId"`
	UserID     string  `queryParam:"style=form,explode=true,name=userId"`
}

type PostOwnershipInstallRequest struct {
	QueryParams PostOwnershipInstallQueryParams
}

type PostOwnershipInstallResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
