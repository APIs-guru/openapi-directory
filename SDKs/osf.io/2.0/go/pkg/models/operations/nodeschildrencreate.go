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
	Collection             *bool                                                `json:"collection,omitempty"`
	CurrentUserCanComment  *bool                                                `json:"current_user_can_comment,omitempty"`
	CurrentUserPermissions []string                                             `json:"current_user_permissions,omitempty"`
	DateCreated            *time.Time                                           `json:"date_created,omitempty"`
	DateModified           *time.Time                                           `json:"date_modified,omitempty"`
	Description            *string                                              `json:"description,omitempty"`
	Fork                   *bool                                                `json:"fork,omitempty"`
	ForkedDate             *time.Time                                           `json:"forked_date,omitempty"`
	NodeLicense            *string                                              `json:"node_license,omitempty"`
	Preprint               *bool                                                `json:"preprint,omitempty"`
	Public                 *bool                                                `json:"public,omitempty"`
	Registration           *bool                                                `json:"registration,omitempty"`
	Tags                   []string                                             `json:"tags,omitempty"`
	TemplateFrom           *string                                              `json:"template_from,omitempty"`
	Title                  string                                               `json:"title"`
}

type NodesChildrenCreateRequestBodyLinksLinks struct {
	HTML *string `json:"html,omitempty"`
	Self *string `json:"self,omitempty"`
}

type NodesChildrenCreateRequestBodyRelationshipsRelationships struct {
	AffiliatedInstitutions *string `json:"affiliated_institutions,omitempty"`
	Children               *string `json:"children,omitempty"`
	Citation               *string `json:"citation,omitempty"`
	Comments               *string `json:"comments,omitempty"`
	Contributors           *string `json:"contributors,omitempty"`
	DraftRegistrations     *string `json:"draft_registrations,omitempty"`
	Files                  *string `json:"files,omitempty"`
	ForkedFrom             *string `json:"forked_from,omitempty"`
	Forks                  *string `json:"forks,omitempty"`
	Identifiers            *string `json:"identifiers,omitempty"`
	License                *string `json:"license,omitempty"`
	LinkedNodes            *string `json:"linked_nodes,omitempty"`
	Logs                   *string `json:"logs,omitempty"`
	NodeLinks              *string `json:"node_links,omitempty"`
	Parent                 *string `json:"parent,omitempty"`
	Preprints              *string `json:"preprints,omitempty"`
	Registrations          *string `json:"registrations,omitempty"`
	Root                   *string `json:"root,omitempty"`
	TemplateNode           *string `json:"template_node,omitempty"`
	ViewOnlyLinks          *string `json:"view_only_links,omitempty"`
	Wikis                  *string `json:"wikis,omitempty"`
}

type NodesChildrenCreateRequestBodyNode struct {
	Attributes    NodesChildrenCreateRequestBodyAttributesAttributes        `json:"attributes"`
	ID            *string                                                   `json:"id,omitempty"`
	Links         *NodesChildrenCreateRequestBodyLinksLinks                 `json:"links,omitempty"`
	Relationships *NodesChildrenCreateRequestBodyRelationshipsRelationships `json:"relationships,omitempty"`
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
