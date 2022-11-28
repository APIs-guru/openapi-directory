package shared

type ItemItemTypeEnum string

const (
	ItemItemTypeEnumUnspecified          ItemItemTypeEnum = "UNSPECIFIED"
	ItemItemTypeEnumContentItem          ItemItemTypeEnum = "CONTENT_ITEM"
	ItemItemTypeEnumContainerItem        ItemItemTypeEnum = "CONTAINER_ITEM"
	ItemItemTypeEnumVirtualContainerItem ItemItemTypeEnum = "VIRTUAL_CONTAINER_ITEM"
)

// Item
// Represents a single object that is an item in the search index, such as a file, folder, or a database record.
type Item struct {
	ACL            *ItemACL            `json:"acl,omitempty"`
	Content        *ItemContent        `json:"content,omitempty"`
	ItemType       *ItemItemTypeEnum   `json:"itemType,omitempty"`
	Metadata       *ItemMetadata       `json:"metadata,omitempty"`
	Name           *string             `json:"name,omitempty"`
	Payload        *string             `json:"payload,omitempty"`
	Queue          *string             `json:"queue,omitempty"`
	Status         *ItemStatus         `json:"status,omitempty"`
	StructuredData *ItemStructuredData `json:"structuredData,omitempty"`
	Version        *string             `json:"version,omitempty"`
}
