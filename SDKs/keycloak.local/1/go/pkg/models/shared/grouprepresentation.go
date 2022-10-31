package shared



type GroupRepresentation struct {
    Access map[string]interface{} `json:"access,omitempty"`
    Attributes map[string]interface{} `json:"attributes,omitempty"`
    ClientRoles map[string]interface{} `json:"clientRoles,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    RealmRoles []string `json:"realmRoles,omitempty"`
    SubGroups []GroupRepresentation `json:"subGroups,omitempty"`
    
}

