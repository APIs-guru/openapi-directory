package shared

type TagKeyPurposeEnum string

const (
	TagKeyPurposeEnumPurposeUnspecified TagKeyPurposeEnum = "PURPOSE_UNSPECIFIED"
	TagKeyPurposeEnumGceFirewall        TagKeyPurposeEnum = "GCE_FIREWALL"
)

type TagKey struct {
	CreateTime     *string            `json:"createTime"`
	Description    *string            `json:"description"`
	Etag           *string            `json:"etag"`
	Name           *string            `json:"name"`
	NamespacedName *string            `json:"namespacedName"`
	Parent         *string            `json:"parent"`
	Purpose        *TagKeyPurposeEnum `json:"purpose"`
	PurposeData    map[string]string  `json:"purposeData"`
	ShortName      *string            `json:"shortName"`
	UpdateTime     *string            `json:"updateTime"`
}
