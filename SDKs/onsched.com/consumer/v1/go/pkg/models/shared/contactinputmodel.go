package shared

type ContactInputModel struct {
	BusinessPhone      *string `json:"businessPhone"`
	BusinessPhoneExt   *string `json:"businessPhoneExt"`
	ConferenceInfo     *string `json:"conferenceInfo"`
	HomePhone          *string `json:"homePhone"`
	MobilePhone        *string `json:"mobilePhone"`
	PreferredPhoneType *string `json:"preferredPhoneType"`
	SkypeUsername      *string `json:"skypeUsername"`
}
