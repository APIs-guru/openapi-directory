import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AclEntry
/** 
 * An entry for an Access Control list.
**/
export class AclEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
