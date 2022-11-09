import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BusinessDefaultsUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoUpdateCustomer" })
  autoUpdateCustomer?: boolean;

  @Metadata({ data: "json, name=businessNotification" })
  businessNotification?: boolean;

  @Metadata({ data: "json, name=customerCity" })
  customerCity?: boolean;

  @Metadata({ data: "json, name=customerState" })
  customerState?: boolean;

  @Metadata({ data: "json, name=emailInfo" })
  emailInfo?: boolean;

  @Metadata({ data: "json, name=enableUtcTimezone" })
  enableUtcTimezone?: boolean;
}
