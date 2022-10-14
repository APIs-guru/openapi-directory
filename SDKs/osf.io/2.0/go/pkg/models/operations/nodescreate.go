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
	Collection             *bool                                        `json:"collection,omitempty"`
	CurrentUserCanComment  *bool                                        `json:"current_user_can_comment,omitempty"`
	CurrentUserPermissions []string                                     `json:"current_user_permissions,omitempty"`
	DateCreated            *time.Time                                   `json:"date_created,omitempty"`
	DateModified           *time.Time                                   `json:"date_modified,omitempty"`
	Description            *string                                      `json:"description,omitempty"`
	Fork                   *bool                                        `json:"fork,omitempty"`
	ForkedDate             *time.Time                                   `json:"forked_date,omitempty"`
	NodeLicense            *string                                      `json:"node_license,omitempty"`
	Preprint               *bool                                        `json:"preprint,omitempty"`
	Public                 *bool                                        `json:"public,omitempty"`
	Registration           *bool                                        `json:"registration,omitempty"`
	Tags                   []string                                     `json:"tags,omitempty"`
	TemplateFrom           *string                                      `json:"template_from,omitempty"`
	Title                  string                                       `json:"title"`
}

type NodesCreateRequestBodyLinksLinks struct {
	HTML *string `json:"html,omitempty"`
	Self *string `json:"self,omitempty"`
}

type NodesCreateRequestBodyRelationshipsRelationships struct {
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

type NodesCreateRequestBodyNode struct {
	Attributes    NodesCreateRequestBodyAttributesAttributes        `json:"attributes"`
	ID            *string                                           `json:"id,omitempty"`
	Links         *NodesCreateRequestBodyLinksLinks                 `json:"links,omitempty"`
	Relationships *NodesCreateRequestBodyRelationshipsRelationships `json:"relationships,omitempty"`
	Type          string                                            `json:"type"`
}

type NodesCreateRequest struct {
	Request NodesCreateRequestBodyNode `request:"mediaType=application/json"`
}

type NodesCreateResponse struct {
	ContentType string
	StatusCode  int64
}
