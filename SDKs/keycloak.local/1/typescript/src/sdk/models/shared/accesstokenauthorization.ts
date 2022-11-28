import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



export class AccessTokenAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: Permission })
  permissions?: Permission[];
}
