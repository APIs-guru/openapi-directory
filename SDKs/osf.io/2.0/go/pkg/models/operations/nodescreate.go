package operations

type NodesCreateNodeAttributesCategoryEnum string

const (
	NodesCreateNodeAttributesCategoryEnumAnalysis           NodesCreateNodeAttributesCategoryEnum = "analysis"
	NodesCreateNodeAttributesCategoryEnumCommunication      NodesCreateNodeAttributesCategoryEnum = "communication"
	NodesCreateNodeAttributesCategoryEnumData               NodesCreateNodeAttributesCategoryEnum = "data"
	NodesCreateNodeAttributesCategoryEnumHypothesis         NodesCreateNodeAttributesCategoryEnum = "hypothesis"
	NodesCreateNodeAttributesCategoryEnumInstrumentation    NodesCreateNodeAttributesCategoryEnum = "instrumentation"
	NodesCreateNodeAttributesCategoryEnumMethodsAndMeasures NodesCreateNodeAttributesCategoryEnum = "methods and measures"
	NodesCreateNodeAttributesCategoryEnumProcedure          NodesCreateNodeAttributesCategoryEnum = "procedure"
	NodesCreateNodeAttributesCategoryEnumProject            NodesCreateNodeAttributesCategoryEnum = "project"
	NodesCreateNodeAttributesCategoryEnumSoftware           NodesCreateNodeAttributesCategoryEnum = "software"
	NodesCreateNodeAttributesCategoryEnumOther              NodesCreateNodeAttributesCategoryEnum = "other"
)

// NodesCreateNodeAttributesInput
// The properties of the node entity.
type NodesCreateNodeAttributesInput struct {
	Category     NodesCreateNodeAttributesCategoryEnum `json:"category"`
	Description  *string                               `json:"description,omitempty"`
	NodeLicense  *string                               `json:"node_license,omitempty"`
	Public       *bool                                 `json:"public,omitempty"`
	Tags         []string                              `json:"tags,omitempty"`
	TemplateFrom *string                               `json:"template_from,omitempty"`
	Title        string                                `json:"title"`
}

type NodesCreateNodeInput struct {
	Attributes NodesCreateNodeAttributesInput `json:"attributes"`
	Type       string                         `json:"type"`
}

type NodesCreateRequest struct {
	Request NodesCreateNodeInput `request:"mediaType=application/json"`
}

type NodesCreateResponse struct {
	ContentType string
	StatusCode  int64
}
