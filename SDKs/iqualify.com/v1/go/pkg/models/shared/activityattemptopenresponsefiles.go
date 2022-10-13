package shared

type ActivityAttemptOpenResponseFiles struct {
	Filename *string `json:"filename"`
	Mimetype *string `json:"mimetype"`
	Size     *string `json:"size"`
	URL      *string `json:"url"`
}
