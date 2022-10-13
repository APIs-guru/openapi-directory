package shared

type AttributeContext struct {
	API         *API                     `json:"api"`
	Destination *Peer                    `json:"destination"`
	Extensions  []map[string]interface{} `json:"extensions"`
	Origin      *Peer                    `json:"origin"`
	Request     *Request                 `json:"request"`
	Resource    *Resource                `json:"resource"`
	Response    *Response                `json:"response"`
	Source      *Peer                    `json:"source"`
}
