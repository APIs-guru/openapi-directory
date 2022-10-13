package operations

import (
	"time"
)

type NodesForksCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesForksCreateRequestBodyAttributesCategoryEnum string

const (
	NodesForksCreateRequestBodyAttributesCategoryEnumAnalysis           NodesForksCreateRequestBodyAttributesCategoryEnum = "analysis"
	NodesForksCreateRequestBodyAttributesCategoryEnumCommunication      NodesForksCreateRequestBodyAttributesCategoryEnum = "communication"
	NodesForksCreateRequestBodyAttributesCategoryEnumData               NodesForksCreateRequestBodyAttributesCategoryEnum = "data"
	NodesForksCreateRequestBodyAttributesCategoryEnumHypothesis         NodesForksCreateRequestBodyAttributesCategoryEnum = "hypothesis"
	NodesForksCreateRequestBodyAttributesCategoryEnumInstrumentation    NodesForksCreateRequestBodyAttributesCategoryEnum = "instrumentation"
	NodesForksCreateRequestBodyAttributesCategoryEnumMethodsAndMeasures NodesForksCreateRequestBodyAttributesCategoryEnum = "methods and measures"
	NodesForksCreateRequestBodyAttributesCategoryEnumProcedure          NodesForksCreateRequestBodyAttributesCategoryEnum = "procedure"
	NodesForksCreateRequestBodyAttributesCategoryEnumProject            NodesForksCreateRequestBodyAttributesCategoryEnum = "project"
	NodesForksCreateRequestBodyAttributesCategoryEnumSoftware           NodesForksCreateRequestBodyAttributesCategoryEnum = "software"
	NodesForksCreateRequestBodyAttributesCategoryEnumOther              NodesForksCreateRequestBodyAttributesCategoryEnum = "other"
)

type NodesForksCreateRequestBodyAttributesAttributes struct {
	Category               NodesForksCreateRequestBodyAttributesCategoryEnum `json:"category"`
	Collection             *bool                                             `json:"collection"`
	CurrentUserCanComment  *bool                                             `json:"current_user_can_comment"`
	CurrentUserPermissions []string                                          `json:"current_user_permissions"`
	DateCreated            *time.Time                                        `json:"date_created"`
	DateModified           *time.Time                                        `json:"date_modified"`
	Description            *string                                           `json:"description"`
	Fork                   *bool                                             `json:"fork"`
	ForkedDate             *time.Time                                        `json:"forked_date"`
	NodeLicense            *string                                           `json:"node_license"`
	Preprint               *bool                                             `json:"preprint"`
	Public                 *bool                                             `json:"public"`
	Registration           *bool                                             `json:"registration"`
	Tags                   []string                                          `json:"tags"`
	TemplateFrom           *string                                           `json:"template_from"`
	Title                  string                                            `json:"title"`
}

type NodesForksCreateRequestBodyLinksLinks struct {
	HTML *string `json:"html"`
	Self *string `json:"self"`
}

type NodesForksCreateRequestBodyRelationshipsRelationships struct {
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

type NodesForksCreateRequestBodyNode struct {
	Attributes    NodesForksCreateRequestBodyAttributesAttributes        `json:"attributes"`
	ID            *string                                                `json:"id"`
	Links         *NodesForksCreateRequestBodyLinksLinks                 `json:"links"`
	Relationships *NodesForksCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                 `json:"type"`
}

type NodesForksCreateRequest struct {
	PathParams NodesForksCreatePathParams
	Request    NodesForksCreateRequestBodyNode `request:"mediaType=application/json"`
}

type NodesForksCreateResponse struct {
	ContentType string
	StatusCode  int64
}
