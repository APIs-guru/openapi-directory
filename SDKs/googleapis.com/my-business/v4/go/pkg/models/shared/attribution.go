package shared

type Attribution struct {
	ProfileName     *string `json:"profileName"`
	ProfilePhotoURL *string `json:"profilePhotoUrl"`
	ProfileURL      *string `json:"profileUrl"`
	TakedownURL     *string `json:"takedownUrl"`
}
