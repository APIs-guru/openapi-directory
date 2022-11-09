import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiServiceOut } from "./apiserviceout";


export class ApiServicesOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiServices", elemType: shared.ApiServiceOut })
  apiServices?: ApiServiceOut[];
}
