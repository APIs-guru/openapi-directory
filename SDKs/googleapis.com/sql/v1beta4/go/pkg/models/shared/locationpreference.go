package shared

// LocationPreference
// Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
type LocationPreference struct {
	FollowGaeApplication *string `json:"followGaeApplication,omitempty"`
	Kind                 *string `json:"kind,omitempty"`
	SecondaryZone        *string `json:"secondaryZone,omitempty"`
	Zone                 *string `json:"zone,omitempty"`
}
