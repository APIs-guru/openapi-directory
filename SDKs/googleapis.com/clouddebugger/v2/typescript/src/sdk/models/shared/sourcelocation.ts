import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceLocation
/** 
 * Represents a location in the source code.
**/
export class SourceLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: number;

  @Metadata({ data: "json, name=line" })
  line?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
