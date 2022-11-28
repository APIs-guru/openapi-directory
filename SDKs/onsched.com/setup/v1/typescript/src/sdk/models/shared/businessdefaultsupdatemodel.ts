import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BusinessDefaultsUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoUpdateCustomer" })
  autoUpdateCustomer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=businessNotification" })
  businessNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customerCity" })
  customerCity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customerState" })
  customerState?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailInfo" })
  emailInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableUtcTimezone" })
  enableUtcTimezone?: boolean;
}
