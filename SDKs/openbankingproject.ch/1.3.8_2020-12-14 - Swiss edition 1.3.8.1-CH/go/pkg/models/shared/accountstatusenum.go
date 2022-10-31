package shared

type AccountStatusEnum string

const (
	AccountStatusEnumEnabled AccountStatusEnum = "enabled"
	AccountStatusEnumDeleted AccountStatusEnum = "deleted"
	AccountStatusEnumBlocked AccountStatusEnum = "blocked"
)
