package shared



type RegistrationsList struct {
    Activity *string `json:"activity,omitempty"`
    ActivityDescription *string `json:"activity_description,omitempty"`
    Applications []ApplicationList `json:"applications,omitempty"`
    Organization OrganizationList `json:"organization"`
    RegistrationNo *string `json:"registration_no,omitempty"`
    
}

