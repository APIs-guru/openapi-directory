package operations

import (
	"openapi/pkg/models/shared"
)

type StreetviewpublishPhotoSequenceCreateInputTypeEnum string

const (
	StreetviewpublishPhotoSequenceCreateInputTypeEnumInputTypeUnspecified StreetviewpublishPhotoSequenceCreateInputTypeEnum = "INPUT_TYPE_UNSPECIFIED"
	StreetviewpublishPhotoSequenceCreateInputTypeEnumVideo                StreetviewpublishPhotoSequenceCreateInputTypeEnum = "VIDEO"
	StreetviewpublishPhotoSequenceCreateInputTypeEnumXdm                  StreetviewpublishPhotoSequenceCreateInputTypeEnum = "XDM"
)

type StreetviewpublishPhotoSequenceCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                            `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                            `queryParam:"style=form,explode=true,name=fields"`
	InputType      *StreetviewpublishPhotoSequenceCreateInputTypeEnum `queryParam:"style=form,explode=true,name=inputType"`
	Key            *string                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                            `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type StreetviewpublishPhotoSequenceCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StreetviewpublishPhotoSequenceCreateRequest struct {
	QueryParams StreetviewpublishPhotoSequenceCreateQueryParams
	Request     *shared.PhotoSequence `request:"mediaType=application/json"`
	Security    StreetviewpublishPhotoSequenceCreateSecurity
}

type StreetviewpublishPhotoSequenceCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
