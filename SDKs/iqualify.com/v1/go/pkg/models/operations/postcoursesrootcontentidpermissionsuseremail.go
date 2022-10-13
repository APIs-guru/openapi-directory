package operations

import (
	"openapi/pkg/models/shared"
)

type PostCoursesRootContentIDPermissionsUserEmailPathParams struct {
	RootContentID string `pathParam:"style=simple,explode=false,name=rootContentId"`
	UserEmail     string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type PostCoursesRootContentIDPermissionsUserEmailRequestBodyPermissionToBeGrantedToTheUser struct {
	IsBuilder  *bool `json:"isBuilder"`
	IsReviewer *bool `json:"isReviewer"`
}

type PostCoursesRootContentIDPermissionsUserEmailRequest struct {
	PathParams PostCoursesRootContentIDPermissionsUserEmailPathParams
	Request    PostCoursesRootContentIDPermissionsUserEmailRequestBodyPermissionToBeGrantedToTheUser `request:"mediaType=application/json"`
}

type PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON struct {
	ContentID *string `json:"contentId"`
}

type PostCoursesRootContentIDPermissionsUserEmailResponse struct {
	ContentType                                                          string
	Error                                                                *shared.Error
	PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSONObject *PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON
	StatusCode                                                           int64
}
