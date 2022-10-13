package shared

type ManagedShortLinkFlaggedAttributeEnum string

const (
	ManagedShortLinkFlaggedAttributeEnumUnspecifiedAttribute ManagedShortLinkFlaggedAttributeEnum = "UNSPECIFIED_ATTRIBUTE"
	ManagedShortLinkFlaggedAttributeEnumSpam                 ManagedShortLinkFlaggedAttributeEnum = "SPAM"
)

type ManagedShortLinkVisibilityEnum string

const (
	ManagedShortLinkVisibilityEnumUnspecifiedVisibility ManagedShortLinkVisibilityEnum = "UNSPECIFIED_VISIBILITY"
	ManagedShortLinkVisibilityEnumUnarchived            ManagedShortLinkVisibilityEnum = "UNARCHIVED"
	ManagedShortLinkVisibilityEnumArchived              ManagedShortLinkVisibilityEnum = "ARCHIVED"
	ManagedShortLinkVisibilityEnumNeverShown            ManagedShortLinkVisibilityEnum = "NEVER_SHOWN"
)

type ManagedShortLink struct {
	CreationTime     *string                                `json:"creationTime"`
	FlaggedAttribute []ManagedShortLinkFlaggedAttributeEnum `json:"flaggedAttribute"`
	Info             *DynamicLinkInfo                       `json:"info"`
	Link             *string                                `json:"link"`
	LinkName         *string                                `json:"linkName"`
	Visibility       *ManagedShortLinkVisibilityEnum        `json:"visibility"`
}
