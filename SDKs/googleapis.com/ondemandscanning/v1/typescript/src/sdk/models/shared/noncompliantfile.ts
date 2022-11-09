import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NonCompliantFile
/** 
 * Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'.
**/
export class NonCompliantFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayCommand" })
  displayCommand?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
