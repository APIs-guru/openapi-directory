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
	CreationTime     *string                                `json:"creationTime,omitempty"`
	FlaggedAttribute []ManagedShortLinkFlaggedAttributeEnum `json:"flaggedAttribute,omitempty"`
	Info             *DynamicLinkInfo                       `json:"info,omitempty"`
	Link             *string                                `json:"link,omitempty"`
	LinkName         *string                                `json:"linkName,omitempty"`
	Visibility       *ManagedShortLinkVisibilityEnum        `json:"visibility,omitempty"`
}
