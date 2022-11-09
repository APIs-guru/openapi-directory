import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyView } from "./keyview";


export class SubscriptionView extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: string;

  @Metadata({ data: "json, name=callbackOnModify" })
  callbackOnModify: boolean;

  @Metadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=commenced" })
  commenced: Date;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=frequency" })
  frequency: string;

  @Metadata({ data: "json, name=keys", elemType: shared.KeyView })
  keys?: KeyView[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
