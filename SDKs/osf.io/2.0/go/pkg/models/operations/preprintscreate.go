package operations

import (
	"time"
)

type PreprintsCreatePreprintAttributes struct {
	DateCreated      *time.Time `json:"date_created,omitempty"`
	DateModified     *time.Time `json:"date_modified,omitempty"`
	DatePublished    *time.Time `json:"date_published,omitempty"`
	Doi              *string    `json:"doi,omitempty"`
	IsPreprintOrphan *bool      `json:"is_preprint_orphan,omitempty"`
	LicenseRecord    *string    `json:"license_record,omitempty"`
	Subjects         []string   `json:"subjects,omitempty"`
}

type PreprintsCreatePreprintLinks struct {
	Doi         *string `json:"doi,omitempty"`
	HTML        *string `json:"html,omitempty"`
	PreprintDoi *string `json:"preprint_doi,omitempty"`
	Self        *string `json:"self,omitempty"`
}

type PreprintsCreatePreprintRelationships struct {
	Citation    *string `json:"citation,omitempty"`
	Identifiers *string `json:"identifiers,omitempty"`
	License     *string `json:"license,omitempty"`
	Node        string  `json:"node"`
	PrimaryFile string  `json:"primary_file"`
	Provider    string  `json:"provider"`
}

type PreprintsCreatePreprint struct {
	Attributes    *PreprintsCreatePreprintAttributes   `json:"attributes,omitempty"`
	ID            *string                              `json:"id,omitempty"`
	Links         *PreprintsCreatePreprintLinks        `json:"links,omitempty"`
	Relationships PreprintsCreatePreprintRelationships `json:"relationships"`
	Type          string                               `json:"type"`
}

type PreprintsCreateRequest struct {
	Request PreprintsCreatePreprint `request:"mediaType=application/json"`
}

type PreprintsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
