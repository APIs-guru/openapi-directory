import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SourceLocation
/** 
 * Represents a location in the source code.
**/
export class SourceLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: number;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
