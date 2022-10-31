package shared



type DeviceProfile struct {
    AlbumArtPn *string `json:"AlbumArtPn,omitempty"`
    CodecProfiles []CodecProfile `json:"CodecProfiles,omitempty"`
    ContainerProfiles []ContainerProfile `json:"ContainerProfiles,omitempty"`
    DirectPlayProfiles []DirectPlayProfile `json:"DirectPlayProfiles,omitempty"`
    EnableAlbumArtInDidl *bool `json:"EnableAlbumArtInDidl,omitempty"`
    EnableMsMediaReceiverRegistrar *bool `json:"EnableMSMediaReceiverRegistrar,omitempty"`
    EnableSingleAlbumArtLimit *bool `json:"EnableSingleAlbumArtLimit,omitempty"`
    EnableSingleSubtitleLimit *bool `json:"EnableSingleSubtitleLimit,omitempty"`
    FriendlyName *string `json:"FriendlyName,omitempty"`
    ID *string `json:"Id,omitempty"`
    Identification *DeviceIdentification `json:"Identification,omitempty"`
    IgnoreTranscodeByteRangeRequests *bool `json:"IgnoreTranscodeByteRangeRequests,omitempty"`
    Manufacturer *string `json:"Manufacturer,omitempty"`
    ManufacturerURL *string `json:"ManufacturerUrl,omitempty"`
    MaxAlbumArtHeight *int32 `json:"MaxAlbumArtHeight,omitempty"`
    MaxAlbumArtWidth *int32 `json:"MaxAlbumArtWidth,omitempty"`
    MaxIconHeight *int32 `json:"MaxIconHeight,omitempty"`
    MaxIconWidth *int32 `json:"MaxIconWidth,omitempty"`
    MaxStaticBitrate *int32 `json:"MaxStaticBitrate,omitempty"`
    MaxStaticMusicBitrate *int32 `json:"MaxStaticMusicBitrate,omitempty"`
    MaxStreamingBitrate *int32 `json:"MaxStreamingBitrate,omitempty"`
    ModelDescription *string `json:"ModelDescription,omitempty"`
    ModelName *string `json:"ModelName,omitempty"`
    ModelNumber *string `json:"ModelNumber,omitempty"`
    ModelURL *string `json:"ModelUrl,omitempty"`
    MusicStreamingTranscodingBitrate *int32 `json:"MusicStreamingTranscodingBitrate,omitempty"`
    Name *string `json:"Name,omitempty"`
    ProtocolInfo *string `json:"ProtocolInfo,omitempty"`
    RequiresPlainFolders *bool `json:"RequiresPlainFolders,omitempty"`
    RequiresPlainVideoItems *bool `json:"RequiresPlainVideoItems,omitempty"`
    ResponseProfiles []ResponseProfile `json:"ResponseProfiles,omitempty"`
    SerialNumber *string `json:"SerialNumber,omitempty"`
    SonyAggregationFlags *string `json:"SonyAggregationFlags,omitempty"`
    SubtitleProfiles []SubtitleProfile `json:"SubtitleProfiles,omitempty"`
    SupportedMediaTypes *string `json:"SupportedMediaTypes,omitempty"`
    TimelineOffsetSeconds *int32 `json:"TimelineOffsetSeconds,omitempty"`
    TranscodingProfiles []TranscodingProfile `json:"TranscodingProfiles,omitempty"`
    UserID *string `json:"UserId,omitempty"`
    XMLRootAttributes []XMLAttribute `json:"XmlRootAttributes,omitempty"`
    
}

