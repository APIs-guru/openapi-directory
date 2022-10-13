package shared

type BlockBlockTypeEnum string

const (
	BlockBlockTypeEnumUnknown BlockBlockTypeEnum = "UNKNOWN"
	BlockBlockTypeEnumText    BlockBlockTypeEnum = "TEXT"
	BlockBlockTypeEnumTable   BlockBlockTypeEnum = "TABLE"
	BlockBlockTypeEnumPicture BlockBlockTypeEnum = "PICTURE"
	BlockBlockTypeEnumRuler   BlockBlockTypeEnum = "RULER"
	BlockBlockTypeEnumBarcode BlockBlockTypeEnum = "BARCODE"
)

type Block struct {
	BlockType   *BlockBlockTypeEnum `json:"blockType"`
	BoundingBox *BoundingPoly       `json:"boundingBox"`
	Confidence  *float32            `json:"confidence"`
	Paragraphs  []Paragraph         `json:"paragraphs"`
	Property    *TextProperty       `json:"property"`
}
