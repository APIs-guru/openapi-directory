import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionCreateModify extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: string;

  @Metadata({ data: "json, name=callbackOnModify" })
  callbackOnModify?: boolean;

  @Metadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=frequency" })
  frequency: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=startFrom" })
  startFrom?: string;
}
