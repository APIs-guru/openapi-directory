package shared



type Casing struct {
    CasingCode *string `json:"casing_code,omitempty"`
    CasingMaterial *string `json:"casing_material,omitempty"`
    Diameter string `json:"diameter"`
    DriveShoe *bool `json:"drive_shoe,omitempty"`
    End string `json:"end"`
    Start string `json:"start"`
    WallThickness *string `json:"wall_thickness,omitempty"`
    
}

