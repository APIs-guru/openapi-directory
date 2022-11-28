import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum {
    FraudUnspecified = "FRAUD_UNSPECIFIED",
    AdImpressionFraud100 = "AD_IMPRESSION_FRAUD_100",
    AdImpressionFraud50 = "AD_IMPRESSION_FRAUD_50",
    AdImpressionFraud25 = "AD_IMPRESSION_FRAUD_25",
    AdImpressionFraud10 = "AD_IMPRESSION_FRAUD_10",
    AdImpressionFraud8 = "AD_IMPRESSION_FRAUD_8",
    AdImpressionFraud6 = "AD_IMPRESSION_FRAUD_6",
    AdImpressionFraud4 = "AD_IMPRESSION_FRAUD_4",
    AdImpressionFraud2 = "AD_IMPRESSION_FRAUD_2"
}
/**
 * DoubleVerify Fraud & Invalid Traffic settings.
**/
export declare class DoubleVerifyFraudInvalidTraffic extends SpeakeasyBase {
    avoidInsufficientOption?: boolean;
    avoidedFraudOption?: DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
}
