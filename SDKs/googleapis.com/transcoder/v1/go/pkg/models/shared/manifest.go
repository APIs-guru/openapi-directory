package shared

type ManifestTypeEnum string

const (
	ManifestTypeEnumManifestTypeUnspecified ManifestTypeEnum = "MANIFEST_TYPE_UNSPECIFIED"
	ManifestTypeEnumHls                     ManifestTypeEnum = "HLS"
	ManifestTypeEnumDash                    ManifestTypeEnum = "DASH"
)

type Manifest struct {
	FileName   *string           `json:"fileName"`
	MuxStreams []string          `json:"muxStreams"`
	Type       *ManifestTypeEnum `json:"type"`
}
