import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaTransactionInfo
/** 
 * A transaction represents the entire purchase transaction.
**/
export class GoogleCloudDiscoveryengineV1alphaTransactionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=discountValue" })
  discountValue?: number;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
