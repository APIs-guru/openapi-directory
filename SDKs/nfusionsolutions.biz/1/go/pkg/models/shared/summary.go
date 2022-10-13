package shared

import (
	"time"
)

type Summary struct {
	Ask                       *float64   `json:"ask"`
	BaseCurrency              *string    `json:"baseCurrency"`
	Bid                       *float64   `json:"bid"`
	FiftyTwoWeekHigh          *float64   `json:"fiftyTwoWeekHigh"`
	FiftyTwoWeekLow           *float64   `json:"fiftyTwoWeekLow"`
	FiftyTwoWeekPercentChange *float64   `json:"fiftyTwoWeekPercentChange"`
	FourWeekPercentChange     *float64   `json:"fourWeekPercentChange"`
	High                      *float64   `json:"high"`
	Last                      *float64   `json:"last"`
	Low                       *float64   `json:"low"`
	OneDayChange              *float64   `json:"oneDayChange"`
	OneDayPercentChange       *float64   `json:"oneDayPercentChange"`
	OneDayValue               *float64   `json:"oneDayValue"`
	Open                      *float64   `json:"open"`
	Symbol                    *string    `json:"symbol"`
	TimeStamp                 *time.Time `json:"timeStamp"`
	TwelveWeekPercentChange   *float64   `json:"twelveWeekPercentChange"`
	YearToDatePercentChange   *float64   `json:"yearToDatePercentChange"`
}
