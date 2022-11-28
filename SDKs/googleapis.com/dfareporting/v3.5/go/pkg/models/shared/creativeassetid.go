package shared

type CreativeAssetIDTypeEnum string

const (
	CreativeAssetIDTypeEnumImage     CreativeAssetIDTypeEnum = "IMAGE"
	CreativeAssetIDTypeEnumFlash     CreativeAssetIDTypeEnum = "FLASH"
	CreativeAssetIDTypeEnumVideo     CreativeAssetIDTypeEnum = "VIDEO"
	CreativeAssetIDTypeEnumHTML      CreativeAssetIDTypeEnum = "HTML"
	CreativeAssetIDTypeEnumHTMLImage CreativeAssetIDTypeEnum = "HTML_IMAGE"
	CreativeAssetIDTypeEnumAudio     CreativeAssetIDTypeEnum = "AUDIO"
)

// CreativeAssetID
// Creative Asset ID.
type CreativeAssetID struct {
	Name *string                  `json:"name,omitempty"`
	Type *CreativeAssetIDTypeEnum `json:"type,omitempty"`
}
