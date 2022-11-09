import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountCustomerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
