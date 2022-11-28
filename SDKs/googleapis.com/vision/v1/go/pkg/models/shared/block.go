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

// Block
// Logical element on the page.
type Block struct {
	BlockType   *BlockBlockTypeEnum `json:"blockType,omitempty"`
	BoundingBox *BoundingPoly       `json:"boundingBox,omitempty"`
	Confidence  *float32            `json:"confidence,omitempty"`
	Paragraphs  []Paragraph         `json:"paragraphs,omitempty"`
	Property    *TextProperty       `json:"property,omitempty"`
}
