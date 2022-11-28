import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PosixGroup
/** 
 * POSIX Group definition to represent a group in a POSIX compliant system.
**/
export class PosixGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=systemId" })
  systemId?: string;
}
