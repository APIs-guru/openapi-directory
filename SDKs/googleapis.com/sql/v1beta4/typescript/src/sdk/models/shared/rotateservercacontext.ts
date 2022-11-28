import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RotateServerCaContext
/** 
 * Instance rotate server CA context.
**/
export class RotateServerCaContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextVersion" })
  nextVersion?: string;
}
