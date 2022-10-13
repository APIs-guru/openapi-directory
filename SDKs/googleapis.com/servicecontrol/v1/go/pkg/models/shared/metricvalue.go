package shared

type MetricValue struct {
	BoolValue         *bool             `json:"boolValue"`
	DistributionValue *Distribution     `json:"distributionValue"`
	DoubleValue       *float64          `json:"doubleValue"`
	EndTime           *string           `json:"endTime"`
	Int64Value        *string           `json:"int64Value"`
	Labels            map[string]string `json:"labels"`
	MoneyValue        *Money            `json:"moneyValue"`
	StartTime         *string           `json:"startTime"`
	StringValue       *string           `json:"stringValue"`
}
