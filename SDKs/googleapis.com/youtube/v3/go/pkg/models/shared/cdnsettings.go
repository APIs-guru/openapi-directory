package shared

type CdnSettingsFrameRateEnum string

const (
	CdnSettingsFrameRateEnumThirtyfps CdnSettingsFrameRateEnum = "30fps"
	CdnSettingsFrameRateEnumSixtyfps  CdnSettingsFrameRateEnum = "60fps"
	CdnSettingsFrameRateEnumVariable  CdnSettingsFrameRateEnum = "variable"
)

type CdnSettingsIngestionTypeEnum string

const (
	CdnSettingsIngestionTypeEnumRtmp   CdnSettingsIngestionTypeEnum = "rtmp"
	CdnSettingsIngestionTypeEnumDash   CdnSettingsIngestionTypeEnum = "dash"
	CdnSettingsIngestionTypeEnumWebrtc CdnSettingsIngestionTypeEnum = "webrtc"
	CdnSettingsIngestionTypeEnumHls    CdnSettingsIngestionTypeEnum = "hls"
)

type CdnSettingsResolutionEnum string

const (
	CdnSettingsResolutionEnumTwoHundredAndFortyp             CdnSettingsResolutionEnum = "240p"
	CdnSettingsResolutionEnumThreeHundredAndSixtyp           CdnSettingsResolutionEnum = "360p"
	CdnSettingsResolutionEnumFourHundredAndEightyp           CdnSettingsResolutionEnum = "480p"
	CdnSettingsResolutionEnumSevenHundredAndTwentyp          CdnSettingsResolutionEnum = "720p"
	CdnSettingsResolutionEnumOneThousandAndEightyp           CdnSettingsResolutionEnum = "1080p"
	CdnSettingsResolutionEnumOneThousandFourHundredAndFortyp CdnSettingsResolutionEnum = "1440p"
	CdnSettingsResolutionEnumTwoThousandOneHundredAndSixtyp  CdnSettingsResolutionEnum = "2160p"
	CdnSettingsResolutionEnumVariable                        CdnSettingsResolutionEnum = "variable"
)

// CdnSettings
// Brief description of the live stream cdn settings.
type CdnSettings struct {
	Format        *string                       `json:"format,omitempty"`
	FrameRate     *CdnSettingsFrameRateEnum     `json:"frameRate,omitempty"`
	IngestionInfo *IngestionInfo                `json:"ingestionInfo,omitempty"`
	IngestionType *CdnSettingsIngestionTypeEnum `json:"ingestionType,omitempty"`
	Resolution    *CdnSettingsResolutionEnum    `json:"resolution,omitempty"`
}
