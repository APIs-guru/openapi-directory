package shared

type AmendmentTypeEnum string

const (
	AmendmentTypeEnumEditLongTitle          AmendmentTypeEnum = "EditLongTitle"
	AmendmentTypeEnumEditBillBody           AmendmentTypeEnum = "EditBillBody"
	AmendmentTypeEnumAddClauseOrSchedule    AmendmentTypeEnum = "AddClauseOrSchedule"
	AmendmentTypeEnumDeleteClauseOrSchedule AmendmentTypeEnum = "DeleteClauseOrSchedule"
)
