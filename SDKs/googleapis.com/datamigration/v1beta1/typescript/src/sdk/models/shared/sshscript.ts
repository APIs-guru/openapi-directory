import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SshScript
/** 
 * Response message for 'GenerateSshScript' request.
**/
export class SshScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=script" })
  script?: string;
}
