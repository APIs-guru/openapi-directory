import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxParty
/** 
 * Connected party information
**/
export class SandboxParty extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
