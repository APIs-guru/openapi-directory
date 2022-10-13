package shared

type ListenersConfigDump struct {
	DynamicListeners []DynamicListener `json:"dynamicListeners"`
	StaticListeners  []StaticListener  `json:"staticListeners"`
	VersionInfo      *string           `json:"versionInfo"`
}
