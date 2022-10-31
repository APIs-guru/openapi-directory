package shared

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
