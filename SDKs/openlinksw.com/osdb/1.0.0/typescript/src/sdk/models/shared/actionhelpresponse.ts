import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionHelp } from "./actionhelp";

export enum ActionHelpResponseStatusEnum {
    Success = "success"
}


export class ActionHelpResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response" })
  response: ActionHelp;

  @Metadata({ data: "json, name=status" })
  status: ActionHelpResponseStatusEnum;
}
