import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyView } from "./keyview";



export class SubscriptionView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: string;

  @SpeakeasyMetadata({ data: "json, name=callbackOnModify" })
  callbackOnModify: boolean;

  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=commenced" })
  commenced: Date;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=keys", elemType: KeyView })
  keys?: KeyView[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
