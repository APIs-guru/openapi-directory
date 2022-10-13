package shared

type ItemItemTypeEnum string

const (
	ItemItemTypeEnumUnspecified          ItemItemTypeEnum = "UNSPECIFIED"
	ItemItemTypeEnumContentItem          ItemItemTypeEnum = "CONTENT_ITEM"
	ItemItemTypeEnumContainerItem        ItemItemTypeEnum = "CONTAINER_ITEM"
	ItemItemTypeEnumVirtualContainerItem ItemItemTypeEnum = "VIRTUAL_CONTAINER_ITEM"
)

type Item struct {
	ACL            *ItemACL            `json:"acl"`
	Content        *ItemContent        `json:"content"`
	ItemType       *ItemItemTypeEnum   `json:"itemType"`
	Metadata       *ItemMetadata       `json:"metadata"`
	Name           *string             `json:"name"`
	Payload        *string             `json:"payload"`
	Queue          *string             `json:"queue"`
	Status         *ItemStatus         `json:"status"`
	StructuredData *ItemStructuredData `json:"structuredData"`
	Version        *string             `json:"version"`
}
