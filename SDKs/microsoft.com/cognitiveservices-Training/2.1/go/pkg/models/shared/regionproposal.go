package shared

type RegionProposal struct {
	BoundingBox *BoundingBox `json:"boundingBox"`
	Confidence  *float32     `json:"confidence"`
}
