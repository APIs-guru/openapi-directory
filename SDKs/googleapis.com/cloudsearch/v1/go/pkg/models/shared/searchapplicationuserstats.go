package shared

type SearchApplicationUserStats struct {
	Date                       *Date   `json:"date"`
	OneDayActiveUsersCount     *string `json:"oneDayActiveUsersCount"`
	SevenDaysActiveUsersCount  *string `json:"sevenDaysActiveUsersCount"`
	ThirtyDaysActiveUsersCount *string `json:"thirtyDaysActiveUsersCount"`
}
