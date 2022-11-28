import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceContext
/** 
 * `SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.
**/
export class SourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;
}
