import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderCustomerLoyaltyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loyaltyNumber" })
  loyaltyNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
