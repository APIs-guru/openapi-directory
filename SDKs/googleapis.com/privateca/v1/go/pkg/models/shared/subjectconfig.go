package shared



type SubjectConfig struct {
    Subject *Subject `json:"subject,omitempty"`
    SubjectAltName *SubjectAltNames `json:"subjectAltName,omitempty"`
    
}

