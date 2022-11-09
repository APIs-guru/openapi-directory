import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PosixGroup
/** 
 * POSIX Group definition to represent a group in a POSIX compliant system.
**/
export class PosixGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=systemId" })
  systemId?: string;
}
