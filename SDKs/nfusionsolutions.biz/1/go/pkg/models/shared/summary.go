package shared

import (
"time")

type Summary struct {
    Ask *float64 `json:"ask,omitempty"`
    BaseCurrency *string `json:"baseCurrency,omitempty"`
    Bid *float64 `json:"bid,omitempty"`
    FiftyTwoWeekHigh *float64 `json:"fiftyTwoWeekHigh,omitempty"`
    FiftyTwoWeekLow *float64 `json:"fiftyTwoWeekLow,omitempty"`
    FiftyTwoWeekPercentChange *float64 `json:"fiftyTwoWeekPercentChange,omitempty"`
    FourWeekPercentChange *float64 `json:"fourWeekPercentChange,omitempty"`
    High *float64 `json:"high,omitempty"`
    Last *float64 `json:"last,omitempty"`
    Low *float64 `json:"low,omitempty"`
    OneDayChange *float64 `json:"oneDayChange,omitempty"`
    OneDayPercentChange *float64 `json:"oneDayPercentChange,omitempty"`
    OneDayValue *float64 `json:"oneDayValue,omitempty"`
    Open *float64 `json:"open,omitempty"`
    Symbol *string `json:"symbol,omitempty"`
    TimeStamp *time.Time `json:"timeStamp,omitempty"`
    TwelveWeekPercentChange *float64 `json:"twelveWeekPercentChange,omitempty"`
    YearToDatePercentChange *float64 `json:"yearToDatePercentChange,omitempty"`
    
}

