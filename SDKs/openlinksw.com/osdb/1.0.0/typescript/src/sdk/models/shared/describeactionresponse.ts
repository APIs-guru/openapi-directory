import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionDescription } from "./actiondescription";

export enum DescribeActionResponseStatusEnum {
    Success = "success"
}


export class DescribeActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response" })
  response: ActionDescription;

  @Metadata({ data: "json, name=status" })
  status: DescribeActionResponseStatusEnum;
}
