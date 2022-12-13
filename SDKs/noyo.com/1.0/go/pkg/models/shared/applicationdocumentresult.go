package shared

type ApplicationDocumentResultStatusEnum string

const (
	ApplicationDocumentResultStatusEnumAccepted   ApplicationDocumentResultStatusEnum = "accepted"
	ApplicationDocumentResultStatusEnumInProgress ApplicationDocumentResultStatusEnum = "in_progress"
	ApplicationDocumentResultStatusEnumIncomplete ApplicationDocumentResultStatusEnum = "incomplete"
	ApplicationDocumentResultStatusEnumNoyoReview ApplicationDocumentResultStatusEnum = "noyo_review"
	ApplicationDocumentResultStatusEnumRejected   ApplicationDocumentResultStatusEnum = "rejected"
	ApplicationDocumentResultStatusEnumSubmitted  ApplicationDocumentResultStatusEnum = "submitted"
	ApplicationDocumentResultStatusEnumWiped      ApplicationDocumentResultStatusEnum = "wiped"
)

type ApplicationDocumentResult struct {
	ApplicationID   string                              `json:"application_id"`
	Created         int64                               `json:"created"`
	DocumentType    string                              `json:"document_type"`
	FileUploadID    *string                             `json:"file_upload_id,omitempty"`
	ID              string                              `json:"id"`
	Modified        int64                               `json:"modified"`
	Name            string                              `json:"name"`
	Notes           string                              `json:"notes"`
	Required        bool                                `json:"required"`
	Status          ApplicationDocumentResultStatusEnum `json:"status"`
	StatusNotes     string                              `json:"status_notes"`
	TemplateFileKey string                              `json:"template_file_key"`
	Version         string                              `json:"version"`
}
