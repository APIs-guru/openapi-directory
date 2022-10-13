package operations

import (
	"time"
)

type PreprintsCreateRequestBodyAttributesAttributes struct {
	DateCreated      *time.Time `json:"date_created"`
	DateModified     *time.Time `json:"date_modified"`
	DatePublished    *time.Time `json:"date_published"`
	Doi              *string    `json:"doi"`
	IsPreprintOrphan *bool      `json:"is_preprint_orphan"`
	LicenseRecord    *string    `json:"license_record"`
	Subjects         []string   `json:"subjects"`
}

type PreprintsCreateRequestBodyLinksLinks struct {
	Doi         *string `json:"doi"`
	HTML        *string `json:"html"`
	PreprintDoi *string `json:"preprint_doi"`
	Self        *string `json:"self"`
}

type PreprintsCreateRequestBodyRelationshipsRelationships struct {
	Citation    *string `json:"citation"`
	Identifiers *string `json:"identifiers"`
	License     *string `json:"license"`
	Node        string  `json:"node"`
	PrimaryFile string  `json:"primary_file"`
	Provider    string  `json:"provider"`
}

type PreprintsCreateRequestBodyPreprint struct {
	Attributes    *PreprintsCreateRequestBodyAttributesAttributes      `json:"attributes"`
	ID            *string                                              `json:"id"`
	Links         *PreprintsCreateRequestBodyLinksLinks                `json:"links"`
	Relationships PreprintsCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                               `json:"type"`
}

type PreprintsCreateRequest struct {
	Request PreprintsCreateRequestBodyPreprint `request:"mediaType=application/json"`
}

type PreprintsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
