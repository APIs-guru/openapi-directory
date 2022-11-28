import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionHelp } from "./actionhelp";


export enum ActionHelpResponseStatusEnum {
    Success = "success"
}


export class ActionHelpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: ActionHelp;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ActionHelpResponseStatusEnum;
}
