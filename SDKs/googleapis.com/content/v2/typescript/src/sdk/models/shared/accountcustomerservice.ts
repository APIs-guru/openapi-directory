import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountCustomerService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
