package shared

type ReadingPosition struct {
	EpubCfiPosition *string `json:"epubCfiPosition"`
	GbImagePosition *string `json:"gbImagePosition"`
	GbTextPosition  *string `json:"gbTextPosition"`
	Kind            *string `json:"kind"`
	PdfPosition     *string `json:"pdfPosition"`
	Updated         *string `json:"updated"`
	VolumeID        *string `json:"volumeId"`
}
