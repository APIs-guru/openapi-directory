import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { AccountCustomerService } from "./accountcustomerservice";



export class AccountBusinessInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AccountAddress;

  @SpeakeasyMetadata({ data: "json, name=customerService" })
  customerService?: AccountCustomerService;

  @SpeakeasyMetadata({ data: "json, name=koreanBusinessRegistrationNumber" })
  koreanBusinessRegistrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
