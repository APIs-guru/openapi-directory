package shared

type CustomerUserStats struct {
	Date                       *Date   `json:"date"`
	OneDayActiveUsersCount     *string `json:"oneDayActiveUsersCount"`
	SevenDaysActiveUsersCount  *string `json:"sevenDaysActiveUsersCount"`
	ThirtyDaysActiveUsersCount *string `json:"thirtyDaysActiveUsersCount"`
}
