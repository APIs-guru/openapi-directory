package shared

type ManifestTypeEnum string

const (
	ManifestTypeEnumManifestTypeUnspecified ManifestTypeEnum = "MANIFEST_TYPE_UNSPECIFIED"
	ManifestTypeEnumHls                     ManifestTypeEnum = "HLS"
	ManifestTypeEnumDash                    ManifestTypeEnum = "DASH"
)

// Manifest
// Manifest configuration.
type Manifest struct {
	FileName   *string           `json:"fileName,omitempty"`
	MuxStreams []string          `json:"muxStreams,omitempty"`
	Type       *ManifestTypeEnum `json:"type,omitempty"`
}
