package shared

type AttributeContext struct {
	API         *API                     `json:"api,omitempty"`
	Destination *Peer                    `json:"destination,omitempty"`
	Extensions  []map[string]interface{} `json:"extensions,omitempty"`
	Origin      *Peer                    `json:"origin,omitempty"`
	Request     *Request                 `json:"request,omitempty"`
	Resource    *Resource                `json:"resource,omitempty"`
	Response    *Response                `json:"response,omitempty"`
	Source      *Peer                    `json:"source,omitempty"`
}
