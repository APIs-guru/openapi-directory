package operations

// PreprintsCreatePreprintAttributesInput
// The properties of the preprint entity.
type PreprintsCreatePreprintAttributesInput struct {
	Doi           *string  `json:"doi,omitempty"`
	LicenseRecord *string  `json:"license_record,omitempty"`
	Subjects      []string `json:"subjects,omitempty"`
}

// PreprintsCreatePreprintRelationshipsInput
// URLs to other entities or entity collections that have a relationship to the preprint entity.
type PreprintsCreatePreprintRelationshipsInput struct {
	License     *string `json:"license,omitempty"`
	Node        string  `json:"node"`
	PrimaryFile string  `json:"primary_file"`
	Provider    string  `json:"provider"`
}

type PreprintsCreatePreprintInput struct {
	Attributes    *PreprintsCreatePreprintAttributesInput   `json:"attributes,omitempty"`
	Relationships PreprintsCreatePreprintRelationshipsInput `json:"relationships"`
	Type          string                                    `json:"type"`
}

type PreprintsCreateRequest struct {
	Request PreprintsCreatePreprintInput `request:"mediaType=application/json"`
}

type PreprintsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
