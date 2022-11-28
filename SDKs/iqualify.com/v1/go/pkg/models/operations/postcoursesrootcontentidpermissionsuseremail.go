package operations

import (
	"openapi/pkg/models/shared"
)

type PostCoursesRootContentIDPermissionsUserEmailPathParams struct {
	RootContentID string `pathParam:"style=simple,explode=false,name=rootContentId"`
	UserEmail     string `pathParam:"style=simple,explode=false,name=userEmail"`
}

type PostCoursesRootContentIDPermissionsUserEmailPermissionToBeGrantedToTheUser struct {
	IsBuilder  *bool `json:"isBuilder,omitempty"`
	IsReviewer *bool `json:"isReviewer,omitempty"`
}

type PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON struct {
	ContentID *string `json:"contentId,omitempty"`
}

type PostCoursesRootContentIDPermissionsUserEmailRequest struct {
	PathParams PostCoursesRootContentIDPermissionsUserEmailPathParams
	Request    PostCoursesRootContentIDPermissionsUserEmailPermissionToBeGrantedToTheUser `request:"mediaType=application/json"`
}

type PostCoursesRootContentIDPermissionsUserEmailResponse struct {
	ContentType                                                          string
	Error                                                                *shared.Error
	PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSONObject *PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON
	StatusCode                                                           int64
}
