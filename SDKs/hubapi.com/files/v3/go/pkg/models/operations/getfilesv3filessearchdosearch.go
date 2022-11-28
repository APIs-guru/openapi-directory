package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetFilesV3FilesSearchDoSearchQueryParams struct {
	After                 *string    `queryParam:"style=form,explode=true,name=after"`
	AllowsAnonymousAccess *bool      `queryParam:"style=form,explode=true,name=allowsAnonymousAccess"`
	Before                *string    `queryParam:"style=form,explode=true,name=before"`
	CreatedAt             *time.Time `queryParam:"style=form,explode=true,name=createdAt"`
	CreatedAtGte          *time.Time `queryParam:"style=form,explode=true,name=createdAtGte"`
	CreatedAtLte          *time.Time `queryParam:"style=form,explode=true,name=createdAtLte"`
	Encoding              *string    `queryParam:"style=form,explode=true,name=encoding"`
	Extension             *string    `queryParam:"style=form,explode=true,name=extension"`
	Height                *int32     `queryParam:"style=form,explode=true,name=height"`
	ID                    *string    `queryParam:"style=form,explode=true,name=id"`
	IsUsableInContent     *bool      `queryParam:"style=form,explode=true,name=isUsableInContent"`
	Limit                 *int32     `queryParam:"style=form,explode=true,name=limit"`
	Name                  *string    `queryParam:"style=form,explode=true,name=name"`
	ParentFolderID        *int64     `queryParam:"style=form,explode=true,name=parentFolderId"`
	Path                  *string    `queryParam:"style=form,explode=true,name=path"`
	Properties            []string   `queryParam:"style=form,explode=true,name=properties"`
	Size                  *int64     `queryParam:"style=form,explode=true,name=size"`
	Sort                  []string   `queryParam:"style=form,explode=true,name=sort"`
	Type                  *string    `queryParam:"style=form,explode=true,name=type"`
	UpdatedAt             *time.Time `queryParam:"style=form,explode=true,name=updatedAt"`
	UpdatedAtGte          *time.Time `queryParam:"style=form,explode=true,name=updatedAtGte"`
	UpdatedAtLte          *time.Time `queryParam:"style=form,explode=true,name=updatedAtLte"`
	URL                   *string    `queryParam:"style=form,explode=true,name=url"`
	Width                 *int32     `queryParam:"style=form,explode=true,name=width"`
}

type GetFilesV3FilesSearchDoSearchSecurity struct {
	PrivateAppsLegacy  *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy       *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	Hapikey            *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy1 *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy1      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type GetFilesV3FilesSearchDoSearchRequest struct {
	QueryParams GetFilesV3FilesSearchDoSearchQueryParams
	Security    GetFilesV3FilesSearchDoSearchSecurity
}

type GetFilesV3FilesSearchDoSearchResponse struct {
	Body                   []byte
	CollectionResponseFile *shared.CollectionResponseFile
	ContentType            string
	StatusCode             int64
}
