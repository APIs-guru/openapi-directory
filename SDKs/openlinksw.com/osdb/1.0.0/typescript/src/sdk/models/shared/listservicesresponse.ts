import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceDescription } from "./servicedescription";


export enum ListServicesResponseStatusEnum {
    Success = "success"
}


export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: ServiceDescription })
  response: ServiceDescription[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ListServicesResponseStatusEnum;
}
