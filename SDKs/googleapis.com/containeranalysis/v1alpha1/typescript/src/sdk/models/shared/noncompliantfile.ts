import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NonCompliantFile
/** 
 * Details about files that caused a compliance check to fail.
**/
export class NonCompliantFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayCommand" })
  displayCommand?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
