package operations

import (
	"time"
)

type NodesChildrenCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesChildrenCreateRequestBodyAttributesCategoryEnum string

const (
	NodesChildrenCreateRequestBodyAttributesCategoryEnumAnalysis           NodesChildrenCreateRequestBodyAttributesCategoryEnum = "analysis"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumCommunication      NodesChildrenCreateRequestBodyAttributesCategoryEnum = "communication"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumData               NodesChildrenCreateRequestBodyAttributesCategoryEnum = "data"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumHypothesis         NodesChildrenCreateRequestBodyAttributesCategoryEnum = "hypothesis"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumInstrumentation    NodesChildrenCreateRequestBodyAttributesCategoryEnum = "instrumentation"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumMethodsAndMeasures NodesChildrenCreateRequestBodyAttributesCategoryEnum = "methods and measures"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumProcedure          NodesChildrenCreateRequestBodyAttributesCategoryEnum = "procedure"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumProject            NodesChildrenCreateRequestBodyAttributesCategoryEnum = "project"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumSoftware           NodesChildrenCreateRequestBodyAttributesCategoryEnum = "software"
	NodesChildrenCreateRequestBodyAttributesCategoryEnumOther              NodesChildrenCreateRequestBodyAttributesCategoryEnum = "other"
)

type NodesChildrenCreateRequestBodyAttributesAttributes struct {
	Category               NodesChildrenCreateRequestBodyAttributesCategoryEnum `json:"category"`
	Collection             *bool                                                `json:"collection"`
	CurrentUserCanComment  *bool                                                `json:"current_user_can_comment"`
	CurrentUserPermissions []string                                             `json:"current_user_permissions"`
	DateCreated            *time.Time                                           `json:"date_created"`
	DateModified           *time.Time                                           `json:"date_modified"`
	Description            *string                                              `json:"description"`
	Fork                   *bool                                                `json:"fork"`
	ForkedDate             *time.Time                                           `json:"forked_date"`
	NodeLicense            *string                                              `json:"node_license"`
	Preprint               *bool                                                `json:"preprint"`
	Public                 *bool                                                `json:"public"`
	Registration           *bool                                                `json:"registration"`
	Tags                   []string                                             `json:"tags"`
	TemplateFrom           *string                                              `json:"template_from"`
	Title                  string                                               `json:"title"`
}

type NodesChildrenCreateRequestBodyLinksLinks struct {
	HTML *string `json:"html"`
	Self *string `json:"self"`
}

type NodesChildrenCreateRequestBodyRelationshipsRelationships struct {
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

type NodesChildrenCreateRequestBodyNode struct {
	Attributes    NodesChildrenCreateRequestBodyAttributesAttributes        `json:"attributes"`
	ID            *string                                                   `json:"id"`
	Links         *NodesChildrenCreateRequestBodyLinksLinks                 `json:"links"`
	Relationships *NodesChildrenCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                    `json:"type"`
}

type NodesChildrenCreateRequest struct {
	PathParams NodesChildrenCreatePathParams
	Request    NodesChildrenCreateRequestBodyNode `request:"mediaType=application/json"`
}

type NodesChildrenCreateResponse struct {
	ContentType string
	StatusCode  int64
}
