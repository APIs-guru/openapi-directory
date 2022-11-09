import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NotificationTypeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Category" })
  category?: string;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=IsBasedOnUserEvent" })
  isBasedOnUserEvent?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
