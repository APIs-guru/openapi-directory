import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RotateServerCaContext
/** 
 * Instance rotate server CA context.
**/
export class RotateServerCaContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextVersion" })
  nextVersion?: string;
}
