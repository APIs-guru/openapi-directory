package operations

type NodesForksCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesForksCreateNodeAttributesCategoryEnum string

const (
	NodesForksCreateNodeAttributesCategoryEnumAnalysis           NodesForksCreateNodeAttributesCategoryEnum = "analysis"
	NodesForksCreateNodeAttributesCategoryEnumCommunication      NodesForksCreateNodeAttributesCategoryEnum = "communication"
	NodesForksCreateNodeAttributesCategoryEnumData               NodesForksCreateNodeAttributesCategoryEnum = "data"
	NodesForksCreateNodeAttributesCategoryEnumHypothesis         NodesForksCreateNodeAttributesCategoryEnum = "hypothesis"
	NodesForksCreateNodeAttributesCategoryEnumInstrumentation    NodesForksCreateNodeAttributesCategoryEnum = "instrumentation"
	NodesForksCreateNodeAttributesCategoryEnumMethodsAndMeasures NodesForksCreateNodeAttributesCategoryEnum = "methods and measures"
	NodesForksCreateNodeAttributesCategoryEnumProcedure          NodesForksCreateNodeAttributesCategoryEnum = "procedure"
	NodesForksCreateNodeAttributesCategoryEnumProject            NodesForksCreateNodeAttributesCategoryEnum = "project"
	NodesForksCreateNodeAttributesCategoryEnumSoftware           NodesForksCreateNodeAttributesCategoryEnum = "software"
	NodesForksCreateNodeAttributesCategoryEnumOther              NodesForksCreateNodeAttributesCategoryEnum = "other"
)

// NodesForksCreateNodeAttributesInput
// The properties of the node entity.
type NodesForksCreateNodeAttributesInput struct {
	Category     NodesForksCreateNodeAttributesCategoryEnum `json:"category"`
	Description  *string                                    `json:"description,omitempty"`
	NodeLicense  *string                                    `json:"node_license,omitempty"`
	Public       *bool                                      `json:"public,omitempty"`
	Tags         []string                                   `json:"tags,omitempty"`
	TemplateFrom *string                                    `json:"template_from,omitempty"`
	Title        string                                     `json:"title"`
}

type NodesForksCreateNodeInput struct {
	Attributes NodesForksCreateNodeAttributesInput `json:"attributes"`
	Type       string                              `json:"type"`
}

type NodesForksCreateRequest struct {
	PathParams NodesForksCreatePathParams
	Request    NodesForksCreateNodeInput `request:"mediaType=application/json"`
}

type NodesForksCreateResponse struct {
	ContentType string
	StatusCode  int64
}
