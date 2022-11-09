import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionHelp extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_id" })
  actionId: string;

  @Metadata({ data: "json, name=help_text" })
  helpText: string;

  @Metadata({ data: "json, name=service_id" })
  serviceId: string;
}
