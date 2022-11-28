package shared

// RestMethodMediaUploadProtocolsResumable
// Supports the Resumable Media Upload protocol.
type RestMethodMediaUploadProtocolsResumable struct {
	Multipart *bool   `json:"multipart,omitempty"`
	Path      *string `json:"path,omitempty"`
}

// RestMethodMediaUploadProtocolsSimple
// Supports uploading as a single HTTP request.
type RestMethodMediaUploadProtocolsSimple struct {
	Multipart *bool   `json:"multipart,omitempty"`
	Path      *string `json:"path,omitempty"`
}

// RestMethodMediaUploadProtocols
// Supported upload protocols.
type RestMethodMediaUploadProtocols struct {
	Resumable *RestMethodMediaUploadProtocolsResumable `json:"resumable,omitempty"`
	Simple    *RestMethodMediaUploadProtocolsSimple    `json:"simple,omitempty"`
}

// RestMethodMediaUpload
// Media upload parameters.
type RestMethodMediaUpload struct {
	Accept    []string                        `json:"accept,omitempty"`
	MaxSize   *string                         `json:"maxSize,omitempty"`
	Protocols *RestMethodMediaUploadProtocols `json:"protocols,omitempty"`
}

// RestMethodRequest
// The schema for the request.
type RestMethodRequest struct {
	DollarRef     *string `json:"$ref,omitempty"`
	ParameterName *string `json:"parameterName,omitempty"`
}

// RestMethodResponse
// The schema for the response.
type RestMethodResponse struct {
	DollarRef *string `json:"$ref,omitempty"`
}

type RestMethod struct {
	Description             *string                `json:"description,omitempty"`
	EtagRequired            *bool                  `json:"etagRequired,omitempty"`
	FlatPath                *string                `json:"flatPath,omitempty"`
	HTTPMethod              *string                `json:"httpMethod,omitempty"`
	ID                      *string                `json:"id,omitempty"`
	MediaUpload             *RestMethodMediaUpload `json:"mediaUpload,omitempty"`
	ParameterOrder          []string               `json:"parameterOrder,omitempty"`
	Parameters              map[string]JSONSchema  `json:"parameters,omitempty"`
	Path                    *string                `json:"path,omitempty"`
	Request                 *RestMethodRequest     `json:"request,omitempty"`
	Response                *RestMethodResponse    `json:"response,omitempty"`
	Scopes                  []string               `json:"scopes,omitempty"`
	SupportsMediaDownload   *bool                  `json:"supportsMediaDownload,omitempty"`
	SupportsMediaUpload     *bool                  `json:"supportsMediaUpload,omitempty"`
	SupportsSubscription    *bool                  `json:"supportsSubscription,omitempty"`
	UseMediaDownloadService *bool                  `json:"useMediaDownloadService,omitempty"`
}
