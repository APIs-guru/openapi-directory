import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NotificationTypeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsBasedOnUserEvent" })
  isBasedOnUserEvent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
