package shared

// StructMatcher
// StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses `path` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node.
type StructMatcher struct {
	Path  []PathSegment `json:"path,omitempty"`
	Value *ValueMatcher `json:"value,omitempty"`
}
