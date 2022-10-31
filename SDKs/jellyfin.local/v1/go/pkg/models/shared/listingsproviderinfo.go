package shared



type ListingsProviderInfo struct {
    ChannelMappings []NameValuePair `json:"ChannelMappings,omitempty"`
    Country *string `json:"Country,omitempty"`
    EnableAllTuners *bool `json:"EnableAllTuners,omitempty"`
    EnabledTuners []string `json:"EnabledTuners,omitempty"`
    ID *string `json:"Id,omitempty"`
    KidsCategories []string `json:"KidsCategories,omitempty"`
    ListingsID *string `json:"ListingsId,omitempty"`
    MovieCategories []string `json:"MovieCategories,omitempty"`
    MoviePrefix *string `json:"MoviePrefix,omitempty"`
    NewsCategories []string `json:"NewsCategories,omitempty"`
    Password *string `json:"Password,omitempty"`
    Path *string `json:"Path,omitempty"`
    PreferredLanguage *string `json:"PreferredLanguage,omitempty"`
    SportsCategories []string `json:"SportsCategories,omitempty"`
    Type *string `json:"Type,omitempty"`
    UserAgent *string `json:"UserAgent,omitempty"`
    Username *string `json:"Username,omitempty"`
    ZipCode *string `json:"ZipCode,omitempty"`
    
}

