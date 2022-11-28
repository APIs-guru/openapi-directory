package operations

type NodesChildrenCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesChildrenCreateNodeAttributesCategoryEnum string

const (
	NodesChildrenCreateNodeAttributesCategoryEnumAnalysis           NodesChildrenCreateNodeAttributesCategoryEnum = "analysis"
	NodesChildrenCreateNodeAttributesCategoryEnumCommunication      NodesChildrenCreateNodeAttributesCategoryEnum = "communication"
	NodesChildrenCreateNodeAttributesCategoryEnumData               NodesChildrenCreateNodeAttributesCategoryEnum = "data"
	NodesChildrenCreateNodeAttributesCategoryEnumHypothesis         NodesChildrenCreateNodeAttributesCategoryEnum = "hypothesis"
	NodesChildrenCreateNodeAttributesCategoryEnumInstrumentation    NodesChildrenCreateNodeAttributesCategoryEnum = "instrumentation"
	NodesChildrenCreateNodeAttributesCategoryEnumMethodsAndMeasures NodesChildrenCreateNodeAttributesCategoryEnum = "methods and measures"
	NodesChildrenCreateNodeAttributesCategoryEnumProcedure          NodesChildrenCreateNodeAttributesCategoryEnum = "procedure"
	NodesChildrenCreateNodeAttributesCategoryEnumProject            NodesChildrenCreateNodeAttributesCategoryEnum = "project"
	NodesChildrenCreateNodeAttributesCategoryEnumSoftware           NodesChildrenCreateNodeAttributesCategoryEnum = "software"
	NodesChildrenCreateNodeAttributesCategoryEnumOther              NodesChildrenCreateNodeAttributesCategoryEnum = "other"
)

// NodesChildrenCreateNodeAttributesInput
// The properties of the node entity.
type NodesChildrenCreateNodeAttributesInput struct {
	Category     NodesChildrenCreateNodeAttributesCategoryEnum `json:"category"`
	Description  *string                                       `json:"description,omitempty"`
	NodeLicense  *string                                       `json:"node_license,omitempty"`
	Public       *bool                                         `json:"public,omitempty"`
	Tags         []string                                      `json:"tags,omitempty"`
	TemplateFrom *string                                       `json:"template_from,omitempty"`
	Title        string                                        `json:"title"`
}

type NodesChildrenCreateNodeInput struct {
	Attributes NodesChildrenCreateNodeAttributesInput `json:"attributes"`
	Type       string                                 `json:"type"`
}

type NodesChildrenCreateRequest struct {
	PathParams NodesChildrenCreatePathParams
	Request    NodesChildrenCreateNodeInput `request:"mediaType=application/json"`
}

type NodesChildrenCreateResponse struct {
	ContentType string
	StatusCode  int64
}
