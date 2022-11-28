import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionDescription } from "./actiondescription";


export enum DescribeActionResponseStatusEnum {
    Success = "success"
}


export class DescribeActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: ActionDescription;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: DescribeActionResponseStatusEnum;
}
