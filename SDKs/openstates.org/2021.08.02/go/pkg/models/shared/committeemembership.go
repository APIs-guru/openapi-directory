package shared



type CommitteeMembership struct {
    Person *CompactPerson `json:"person,omitempty"`
    PersonName string `json:"person_name"`
    Role string `json:"role"`
    
}

