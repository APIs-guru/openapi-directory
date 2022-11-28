import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlusAclentryResource } from "./plusaclentryresource";



export class Acl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PlusAclentryResource })
  items?: PlusAclentryResource[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
