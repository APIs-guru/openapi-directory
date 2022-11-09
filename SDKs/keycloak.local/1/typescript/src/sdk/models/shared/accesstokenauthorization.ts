import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permission } from "./permission";


export class AccessTokenAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions", elemType: shared.Permission })
  permissions?: Permission[];
}
