package shared



type CollectionOverride struct {
    Collection *string `json:"collection,omitempty"`
    MethodMap *MethodMap `json:"methodMap,omitempty"`
    Options *Options `json:"options,omitempty"`
    
}

