import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceDescription } from "./servicedescription";


export enum DescribeServiceResponseStatusEnum {
    Success = "success"
}


export class DescribeServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: ServiceDescription;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: DescribeServiceResponseStatusEnum;
}
