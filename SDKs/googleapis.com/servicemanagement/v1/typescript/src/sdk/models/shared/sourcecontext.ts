import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SourceContext
/** 
 * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
**/
export class SourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileName" })
  fileName?: string;
}
