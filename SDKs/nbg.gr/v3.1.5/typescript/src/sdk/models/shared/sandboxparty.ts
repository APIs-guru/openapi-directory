import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxParty
/** 
 * Connected party information
**/
export class SandboxParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
