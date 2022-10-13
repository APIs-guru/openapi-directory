package shared

type DeviceProfile struct {
	AlbumArtPn                       *string               `json:"AlbumArtPn"`
	CodecProfiles                    []CodecProfile        `json:"CodecProfiles"`
	ContainerProfiles                []ContainerProfile    `json:"ContainerProfiles"`
	DirectPlayProfiles               []DirectPlayProfile   `json:"DirectPlayProfiles"`
	EnableAlbumArtInDidl             *bool                 `json:"EnableAlbumArtInDidl"`
	EnableMsMediaReceiverRegistrar   *bool                 `json:"EnableMSMediaReceiverRegistrar"`
	EnableSingleAlbumArtLimit        *bool                 `json:"EnableSingleAlbumArtLimit"`
	EnableSingleSubtitleLimit        *bool                 `json:"EnableSingleSubtitleLimit"`
	FriendlyName                     *string               `json:"FriendlyName"`
	ID                               *string               `json:"Id"`
	Identification                   *DeviceIdentification `json:"Identification"`
	IgnoreTranscodeByteRangeRequests *bool                 `json:"IgnoreTranscodeByteRangeRequests"`
	Manufacturer                     *string               `json:"Manufacturer"`
	ManufacturerURL                  *string               `json:"ManufacturerUrl"`
	MaxAlbumArtHeight                *int32                `json:"MaxAlbumArtHeight"`
	MaxAlbumArtWidth                 *int32                `json:"MaxAlbumArtWidth"`
	MaxIconHeight                    *int32                `json:"MaxIconHeight"`
	MaxIconWidth                     *int32                `json:"MaxIconWidth"`
	MaxStaticBitrate                 *int32                `json:"MaxStaticBitrate"`
	MaxStaticMusicBitrate            *int32                `json:"MaxStaticMusicBitrate"`
	MaxStreamingBitrate              *int32                `json:"MaxStreamingBitrate"`
	ModelDescription                 *string               `json:"ModelDescription"`
	ModelName                        *string               `json:"ModelName"`
	ModelNumber                      *string               `json:"ModelNumber"`
	ModelURL                         *string               `json:"ModelUrl"`
	MusicStreamingTranscodingBitrate *int32                `json:"MusicStreamingTranscodingBitrate"`
	Name                             *string               `json:"Name"`
	ProtocolInfo                     *string               `json:"ProtocolInfo"`
	RequiresPlainFolders             *bool                 `json:"RequiresPlainFolders"`
	RequiresPlainVideoItems          *bool                 `json:"RequiresPlainVideoItems"`
	ResponseProfiles                 []ResponseProfile     `json:"ResponseProfiles"`
	SerialNumber                     *string               `json:"SerialNumber"`
	SonyAggregationFlags             *string               `json:"SonyAggregationFlags"`
	SubtitleProfiles                 []SubtitleProfile     `json:"SubtitleProfiles"`
	SupportedMediaTypes              *string               `json:"SupportedMediaTypes"`
	TimelineOffsetSeconds            *int32                `json:"TimelineOffsetSeconds"`
	TranscodingProfiles              []TranscodingProfile  `json:"TranscodingProfiles"`
	UserID                           *string               `json:"UserId"`
	XMLRootAttributes                []XMLAttribute        `json:"XmlRootAttributes"`
}
