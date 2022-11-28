package shared

// DeliveryPipeline
// A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
type DeliveryPipeline struct {
	Annotations    map[string]string  `json:"annotations,omitempty"`
	Condition      *PipelineCondition `json:"condition,omitempty"`
	CreateTime     *string            `json:"createTime,omitempty"`
	Description    *string            `json:"description,omitempty"`
	Etag           *string            `json:"etag,omitempty"`
	Labels         map[string]string  `json:"labels,omitempty"`
	Name           *string            `json:"name,omitempty"`
	SerialPipeline *SerialPipeline    `json:"serialPipeline,omitempty"`
	Suspended      *bool              `json:"suspended,omitempty"`
	UID            *string            `json:"uid,omitempty"`
	UpdateTime     *string            `json:"updateTime,omitempty"`
}

// DeliveryPipelineInput
// A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
type DeliveryPipelineInput struct {
	Annotations    map[string]string  `json:"annotations,omitempty"`
	Condition      *PipelineCondition `json:"condition,omitempty"`
	Description    *string            `json:"description,omitempty"`
	Etag           *string            `json:"etag,omitempty"`
	Labels         map[string]string  `json:"labels,omitempty"`
	Name           *string            `json:"name,omitempty"`
	SerialPipeline *SerialPipeline    `json:"serialPipeline,omitempty"`
	Suspended      *bool              `json:"suspended,omitempty"`
}
