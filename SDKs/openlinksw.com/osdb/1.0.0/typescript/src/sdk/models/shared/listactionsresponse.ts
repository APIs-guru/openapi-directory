import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionDescription } from "./actiondescription";


export enum ListActionsResponseStatusEnum {
    Success = "success"
}


export class ListActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: ActionDescription })
  response: ActionDescription[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ListActionsResponseStatusEnum;
}
