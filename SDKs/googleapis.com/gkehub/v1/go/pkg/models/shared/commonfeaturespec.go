package shared



type CommonFeatureSpec struct {
    Appdevexperience map[string]interface{} `json:"appdevexperience,omitempty"`
    Multiclusteringress *MultiClusterIngressFeatureSpec `json:"multiclusteringress,omitempty"`
    
}

