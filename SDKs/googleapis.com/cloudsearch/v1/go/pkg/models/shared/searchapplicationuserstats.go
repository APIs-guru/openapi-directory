package shared

type SearchApplicationUserStats struct {
	Date                       *Date   `json:"date,omitempty"`
	OneDayActiveUsersCount     *string `json:"oneDayActiveUsersCount,omitempty"`
	SevenDaysActiveUsersCount  *string `json:"sevenDaysActiveUsersCount,omitempty"`
	ThirtyDaysActiveUsersCount *string `json:"thirtyDaysActiveUsersCount,omitempty"`
}
