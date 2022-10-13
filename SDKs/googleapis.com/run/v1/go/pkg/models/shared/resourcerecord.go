package shared

type ResourceRecordTypeEnum string

const (
	ResourceRecordTypeEnumRecordTypeUnspecified ResourceRecordTypeEnum = "RECORD_TYPE_UNSPECIFIED"
	ResourceRecordTypeEnumA                     ResourceRecordTypeEnum = "A"
	ResourceRecordTypeEnumAaaa                  ResourceRecordTypeEnum = "AAAA"
	ResourceRecordTypeEnumCname                 ResourceRecordTypeEnum = "CNAME"
)

type ResourceRecord struct {
	Name   *string                 `json:"name"`
	Rrdata *string                 `json:"rrdata"`
	Type   *ResourceRecordTypeEnum `json:"type"`
}
