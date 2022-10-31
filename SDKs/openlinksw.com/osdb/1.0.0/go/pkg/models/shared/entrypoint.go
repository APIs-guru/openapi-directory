package shared

type EntryPointHTTPMethodEnum string

const (
	EntryPointHTTPMethodEnumGet    EntryPointHTTPMethodEnum = "GET"
	EntryPointHTTPMethodEnumPut    EntryPointHTTPMethodEnum = "PUT"
	EntryPointHTTPMethodEnumPost   EntryPointHTTPMethodEnum = "POST"
	EntryPointHTTPMethodEnumDelete EntryPointHTTPMethodEnum = "DELETE"
)

type EntryPoint struct {
	ContentTypes  []string                 `json:"content_types"`
	Description   string                   `json:"description"`
	EncodingTypes []string                 `json:"encoding_types"`
	HTTPMethod    EntryPointHTTPMethodEnum `json:"http_method"`
	Name          string                   `json:"name"`
	Parameters    []EntryPointParameter    `json:"parameters"`
	URL           string                   `json:"url"`
	URLTemplate   string                   `json:"url_template"`
}
