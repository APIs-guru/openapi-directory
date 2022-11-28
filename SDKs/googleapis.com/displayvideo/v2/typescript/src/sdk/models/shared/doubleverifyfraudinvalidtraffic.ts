import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum {
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


// DoubleVerifyFraudInvalidTraffic
/** 
 * DoubleVerify Fraud & Invalid Traffic settings.
**/
export class DoubleVerifyFraudInvalidTraffic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avoidInsufficientOption" })
  avoidInsufficientOption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=avoidedFraudOption" })
  avoidedFraudOption?: DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
}
