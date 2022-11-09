import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlusAclentryResource } from "./plusaclentryresource";


export class Acl extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=items", elemType: shared.PlusAclentryResource })
  items?: PlusAclentryResource[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
