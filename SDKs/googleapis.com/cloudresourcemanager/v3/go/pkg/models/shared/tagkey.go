package shared

type TagKeyPurposeEnum string

const (
	TagKeyPurposeEnumPurposeUnspecified TagKeyPurposeEnum = "PURPOSE_UNSPECIFIED"
	TagKeyPurposeEnumGceFirewall        TagKeyPurposeEnum = "GCE_FIREWALL"
)

type TagKey struct {
	CreateTime     *string            `json:"createTime,omitempty"`
	Description    *string            `json:"description,omitempty"`
	Etag           *string            `json:"etag,omitempty"`
	Name           *string            `json:"name,omitempty"`
	NamespacedName *string            `json:"namespacedName,omitempty"`
	Parent         *string            `json:"parent,omitempty"`
	Purpose        *TagKeyPurposeEnum `json:"purpose,omitempty"`
	PurposeData    map[string]string  `json:"purposeData,omitempty"`
	ShortName      *string            `json:"shortName,omitempty"`
	UpdateTime     *string            `json:"updateTime,omitempty"`
}
