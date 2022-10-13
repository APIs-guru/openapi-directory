package shared

type Casing struct {
	CasingCode     *string `json:"casing_code"`
	CasingMaterial *string `json:"casing_material"`
	Diameter       string  `json:"diameter"`
	DriveShoe      *bool   `json:"drive_shoe"`
	End            string  `json:"end"`
	Start          string  `json:"start"`
	WallThickness  *string `json:"wall_thickness"`
}
