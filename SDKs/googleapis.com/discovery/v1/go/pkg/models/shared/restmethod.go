package shared

type RestMethodMediaUploadProtocolsResumable struct {
	Multipart *bool   `json:"multipart"`
	Path      *string `json:"path"`
}

type RestMethodMediaUploadProtocolsSimple struct {
	Multipart *bool   `json:"multipart"`
	Path      *string `json:"path"`
}

type RestMethodMediaUploadProtocols struct {
	Resumable *RestMethodMediaUploadProtocolsResumable `json:"resumable"`
	Simple    *RestMethodMediaUploadProtocolsSimple    `json:"simple"`
}

type RestMethodMediaUpload struct {
	Accept    []string                        `json:"accept"`
	MaxSize   *string                         `json:"maxSize"`
	Protocols *RestMethodMediaUploadProtocols `json:"protocols"`
}

type RestMethodRequest struct {
	DollarRef     *string `json:"$ref"`
	ParameterName *string `json:"parameterName"`
}

type RestMethodResponse struct {
	DollarRef *string `json:"$ref"`
}

type RestMethod struct {
	Description             *string                `json:"description"`
	EtagRequired            *bool                  `json:"etagRequired"`
	FlatPath                *string                `json:"flatPath"`
	HTTPMethod              *string                `json:"httpMethod"`
	ID                      *string                `json:"id"`
	MediaUpload             *RestMethodMediaUpload `json:"mediaUpload"`
	ParameterOrder          []string               `json:"parameterOrder"`
	Parameters              map[string]JSONSchema  `json:"parameters"`
	Path                    *string                `json:"path"`
	Request                 *RestMethodRequest     `json:"request"`
	Response                *RestMethodResponse    `json:"response"`
	Scopes                  []string               `json:"scopes"`
	SupportsMediaDownload   *bool                  `json:"supportsMediaDownload"`
	SupportsMediaUpload     *bool                  `json:"supportsMediaUpload"`
	SupportsSubscription    *bool                  `json:"supportsSubscription"`
	UseMediaDownloadService *bool                  `json:"useMediaDownloadService"`
}
