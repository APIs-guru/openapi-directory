package shared

type SlsaProvenance struct {
	Builder   *SlsaBuilder  `json:"builder"`
	Materials []Material    `json:"materials"`
	Metadata  *SlsaMetadata `json:"metadata"`
	Recipe    *SlsaRecipe   `json:"recipe"`
}
