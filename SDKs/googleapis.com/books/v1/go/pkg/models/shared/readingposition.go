package shared



type ReadingPosition struct {
    EpubCfiPosition *string `json:"epubCfiPosition,omitempty"`
    GbImagePosition *string `json:"gbImagePosition,omitempty"`
    GbTextPosition *string `json:"gbTextPosition,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PdfPosition *string `json:"pdfPosition,omitempty"`
    Updated *string `json:"updated,omitempty"`
    VolumeID *string `json:"volumeId,omitempty"`
    
}

