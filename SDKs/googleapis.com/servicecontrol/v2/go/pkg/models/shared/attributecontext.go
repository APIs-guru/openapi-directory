package shared

// AttributeContext
// This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
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
