import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderCustomerLoyaltyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=loyaltyNumber" })
  loyaltyNumber?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
