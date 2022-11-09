import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceDescription } from "./servicedescription";

export enum ListServicesResponseStatusEnum {
    Success = "success"
}


export class ListServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response", elemType: shared.ServiceDescription })
  response: ServiceDescription[];

  @Metadata({ data: "json, name=status" })
  status: ListServicesResponseStatusEnum;
}
