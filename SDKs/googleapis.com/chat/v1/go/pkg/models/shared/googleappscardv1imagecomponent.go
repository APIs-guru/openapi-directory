package shared

type GoogleAppsCardV1ImageComponent struct {
	AltText     *string                         `json:"altText"`
	BorderStyle *GoogleAppsCardV1BorderStyle    `json:"borderStyle"`
	CropStyle   *GoogleAppsCardV1ImageCropStyle `json:"cropStyle"`
	ImageURI    *string                         `json:"imageUri"`
}
