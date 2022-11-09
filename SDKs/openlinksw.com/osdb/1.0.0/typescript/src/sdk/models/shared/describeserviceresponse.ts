import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceDescription } from "./servicedescription";

export enum DescribeServiceResponseStatusEnum {
    Success = "success"
}


export class DescribeServiceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response" })
  response: ServiceDescription;

  @Metadata({ data: "json, name=status" })
  status: DescribeServiceResponseStatusEnum;
}
