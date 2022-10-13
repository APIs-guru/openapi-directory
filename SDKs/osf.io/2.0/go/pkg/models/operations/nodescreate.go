package operations

import (
	"time"
)

type NodesCreateRequestBodyAttributesCategoryEnum string

const (
	NodesCreateRequestBodyAttributesCategoryEnumAnalysis           NodesCreateRequestBodyAttributesCategoryEnum = "analysis"
	NodesCreateRequestBodyAttributesCategoryEnumCommunication      NodesCreateRequestBodyAttributesCategoryEnum = "communication"
	NodesCreateRequestBodyAttributesCategoryEnumData               NodesCreateRequestBodyAttributesCategoryEnum = "data"
	NodesCreateRequestBodyAttributesCategoryEnumHypothesis         NodesCreateRequestBodyAttributesCategoryEnum = "hypothesis"
	NodesCreateRequestBodyAttributesCategoryEnumInstrumentation    NodesCreateRequestBodyAttributesCategoryEnum = "instrumentation"
	NodesCreateRequestBodyAttributesCategoryEnumMethodsAndMeasures NodesCreateRequestBodyAttributesCategoryEnum = "methods and measures"
	NodesCreateRequestBodyAttributesCategoryEnumProcedure          NodesCreateRequestBodyAttributesCategoryEnum = "procedure"
	NodesCreateRequestBodyAttributesCategoryEnumProject            NodesCreateRequestBodyAttributesCategoryEnum = "project"
	NodesCreateRequestBodyAttributesCategoryEnumSoftware           NodesCreateRequestBodyAttributesCategoryEnum = "software"
	NodesCreateRequestBodyAttributesCategoryEnumOther              NodesCreateRequestBodyAttributesCategoryEnum = "other"
)

type NodesCreateRequestBodyAttributesAttributes struct {
	Category               NodesCreateRequestBodyAttributesCategoryEnum `json:"category"`
	Collection             *bool                                        `json:"collection"`
	CurrentUserCanComment  *bool                                        `json:"current_user_can_comment"`
	CurrentUserPermissions []string                                     `json:"current_user_permissions"`
	DateCreated            *time.Time                                   `json:"date_created"`
	DateModified           *time.Time                                   `json:"date_modified"`
	Description            *string                                      `json:"description"`
	Fork                   *bool                                        `json:"fork"`
	ForkedDate             *time.Time                                   `json:"forked_date"`
	NodeLicense            *string                                      `json:"node_license"`
	Preprint               *bool                                        `json:"preprint"`
	Public                 *bool                                        `json:"public"`
	Registration           *bool                                        `json:"registration"`
	Tags                   []string                                     `json:"tags"`
	TemplateFrom           *string                                      `json:"template_from"`
	Title                  string                                       `json:"title"`
}

type NodesCreateRequestBodyLinksLinks struct {
	HTML *string `json:"html"`
	Self *string `json:"self"`
}

type NodesCreateRequestBodyRelationshipsRelationships struct {
	AffiliatedInstitutions *string `json:"affiliated_institutions"`
	Children               *string `json:"children"`
	Citation               *string `json:"citation"`
	Comments               *string `json:"comments"`
	Contributors           *string `json:"contributors"`
	DraftRegistrations     *string `json:"draft_registrations"`
	Files                  *string `json:"files"`
	ForkedFrom             *string `json:"forked_from"`
	Forks                  *string `json:"forks"`
	Identifiers            *string `json:"identifiers"`
	License                *string `json:"license"`
	LinkedNodes            *string `json:"linked_nodes"`
	Logs                   *string `json:"logs"`
	NodeLinks              *string `json:"node_links"`
	Parent                 *string `json:"parent"`
	Preprints              *string `json:"preprints"`
	Registrations          *string `json:"registrations"`
	Root                   *string `json:"root"`
	TemplateNode           *string `json:"template_node"`
	ViewOnlyLinks          *string `json:"view_only_links"`
	Wikis                  *string `json:"wikis"`
}

type NodesCreateRequestBodyNode struct {
	Attributes    NodesCreateRequestBodyAttributesAttributes        `json:"attributes"`
	ID            *string                                           `json:"id"`
	Links         *NodesCreateRequestBodyLinksLinks                 `json:"links"`
	Relationships *NodesCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                            `json:"type"`
}

type NodesCreateRequest struct {
	Request NodesCreateRequestBodyNode `request:"mediaType=application/json"`
}

type NodesCreateResponse struct {
	ContentType string
	StatusCode  int64
}
