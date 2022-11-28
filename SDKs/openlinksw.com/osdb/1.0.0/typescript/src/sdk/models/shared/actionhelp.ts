import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionHelp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_id" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=help_text" })
  helpText: string;

  @SpeakeasyMetadata({ data: "json, name=service_id" })
  serviceId: string;
}
