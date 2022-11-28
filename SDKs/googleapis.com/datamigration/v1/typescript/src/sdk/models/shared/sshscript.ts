import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SshScript
/** 
 * Response message for 'GenerateSshScript' request.
**/
export class SshScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
