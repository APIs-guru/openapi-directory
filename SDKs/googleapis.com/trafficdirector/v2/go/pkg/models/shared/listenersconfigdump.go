package shared

type ListenersConfigDump struct {
	DynamicListeners []DynamicListener `json:"dynamicListeners,omitempty"`
	StaticListeners  []StaticListener  `json:"staticListeners,omitempty"`
	VersionInfo      *string           `json:"versionInfo,omitempty"`
}
