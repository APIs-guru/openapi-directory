package shared



type UserProfile struct {
    EmailAddress *string `json:"emailAddress,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *Name `json:"name,omitempty"`
    Permissions []GlobalPermission `json:"permissions,omitempty"`
    PhotoURL *string `json:"photoUrl,omitempty"`
    VerifiedTeacher *bool `json:"verifiedTeacher,omitempty"`
    
}

