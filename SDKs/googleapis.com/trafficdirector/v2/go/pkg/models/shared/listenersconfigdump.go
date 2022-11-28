package shared

// ListenersConfigDump
// Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
type ListenersConfigDump struct {
	DynamicListeners []DynamicListener `json:"dynamicListeners,omitempty"`
	StaticListeners  []StaticListener  `json:"staticListeners,omitempty"`
	VersionInfo      *string           `json:"versionInfo,omitempty"`
}
