import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionDescription } from "./actiondescription";

export enum ListActionsResponseStatusEnum {
    Success = "success"
}


export class ListActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response", elemType: shared.ActionDescription })
  response: ActionDescription[];

  @Metadata({ data: "json, name=status" })
  status: ListActionsResponseStatusEnum;
}
