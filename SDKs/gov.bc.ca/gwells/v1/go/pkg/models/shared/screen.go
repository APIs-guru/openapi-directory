package shared

type Screen struct {
	AssemblyType     string  `json:"assembly_type"`
	End              string  `json:"end"`
	InternalDiameter *string `json:"internal_diameter,omitempty"`
	SlotSize         *string `json:"slot_size,omitempty"`
	Start            string  `json:"start"`
}
