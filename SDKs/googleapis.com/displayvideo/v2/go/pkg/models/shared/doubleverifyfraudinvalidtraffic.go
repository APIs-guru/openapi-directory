package shared

type DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum string

const (
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified     DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "FRAUD_UNSPECIFIED"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud100 DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_100"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud50  DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_50"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud25  DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_25"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud10  DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_10"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud8   DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_8"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud6   DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_6"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud4   DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_4"
	DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2   DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum = "AD_IMPRESSION_FRAUD_2"
)

type DoubleVerifyFraudInvalidTraffic struct {
	AvoidInsufficientOption *bool                                                  `json:"avoidInsufficientOption,omitempty"`
	AvoidedFraudOption      *DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum `json:"avoidedFraudOption,omitempty"`
}
