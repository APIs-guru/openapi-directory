package shared

type NfsExportOptionsAccessModeEnum string

const (
	NfsExportOptionsAccessModeEnumAccessModeUnspecified NfsExportOptionsAccessModeEnum = "ACCESS_MODE_UNSPECIFIED"
	NfsExportOptionsAccessModeEnumReadOnly              NfsExportOptionsAccessModeEnum = "READ_ONLY"
	NfsExportOptionsAccessModeEnumReadWrite             NfsExportOptionsAccessModeEnum = "READ_WRITE"
)

type NfsExportOptionsSquashModeEnum string

const (
	NfsExportOptionsSquashModeEnumSquashModeUnspecified NfsExportOptionsSquashModeEnum = "SQUASH_MODE_UNSPECIFIED"
	NfsExportOptionsSquashModeEnumNoRootSquash          NfsExportOptionsSquashModeEnum = "NO_ROOT_SQUASH"
	NfsExportOptionsSquashModeEnumRootSquash            NfsExportOptionsSquashModeEnum = "ROOT_SQUASH"
)

type NfsExportOptions struct {
	AccessMode *NfsExportOptionsAccessModeEnum `json:"accessMode,omitempty"`
	AnonGid    *string                         `json:"anonGid,omitempty"`
	AnonUID    *string                         `json:"anonUid,omitempty"`
	IPRanges   []string                        `json:"ipRanges,omitempty"`
	SquashMode *NfsExportOptionsSquashModeEnum `json:"squashMode,omitempty"`
}
