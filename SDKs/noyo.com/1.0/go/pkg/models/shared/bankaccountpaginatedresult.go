package shared

// BankAccountPaginatedResultMeta
// Metadata associated with the response data
type BankAccountPaginatedResultMeta struct {
	Offset       int32 `json:"offset"`
	PageNum      int32 `json:"page_num"`
	PageSize     int32 `json:"page_size"`
	TotalRecords int32 `json:"total_records"`
}

type BankAccountPaginatedResult struct {
	Meta     BankAccountPaginatedResultMeta `json:"meta"`
	Response []BankAccountResult            `json:"response"`
}
