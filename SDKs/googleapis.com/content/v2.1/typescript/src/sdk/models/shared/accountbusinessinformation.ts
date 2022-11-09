import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountAddress } from "./accountaddress";
import { AccountCustomerService } from "./accountcustomerservice";


export class AccountBusinessInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: AccountAddress;

  @Metadata({ data: "json, name=customerService" })
  customerService?: AccountCustomerService;

  @Metadata({ data: "json, name=koreanBusinessRegistrationNumber" })
  koreanBusinessRegistrationNumber?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=phoneVerificationStatus" })
  phoneVerificationStatus?: string;
}
