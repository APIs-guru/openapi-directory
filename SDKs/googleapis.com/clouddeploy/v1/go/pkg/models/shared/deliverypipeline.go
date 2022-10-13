package shared

type DeliveryPipeline struct {
	Annotations    map[string]string  `json:"annotations"`
	Condition      *PipelineCondition `json:"condition"`
	CreateTime     *string            `json:"createTime"`
	Description    *string            `json:"description"`
	Etag           *string            `json:"etag"`
	Labels         map[string]string  `json:"labels"`
	Name           *string            `json:"name"`
	SerialPipeline *SerialPipeline    `json:"serialPipeline"`
	Suspended      *bool              `json:"suspended"`
	UID            *string            `json:"uid"`
	UpdateTime     *string            `json:"updateTime"`
}
