import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiServiceOut } from "./apiserviceout";



export class ApiServicesOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiServices", elemType: ApiServiceOut })
  apiServices?: ApiServiceOut[];
}
