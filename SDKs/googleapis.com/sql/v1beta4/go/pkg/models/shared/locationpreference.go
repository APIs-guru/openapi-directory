package shared

type LocationPreference struct {
	FollowGaeApplication *string `json:"followGaeApplication"`
	Kind                 *string `json:"kind"`
	SecondaryZone        *string `json:"secondaryZone"`
	Zone                 *string `json:"zone"`
}
