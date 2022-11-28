import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAddress } from "./accountaddress";
import { AccountCustomerService } from "./accountcustomerservice";
export declare class AccountBusinessInformation extends SpeakeasyBase {
    address?: AccountAddress;
    customerService?: AccountCustomerService;
    koreanBusinessRegistrationNumber?: string;
    phoneNumber?: string;
}
