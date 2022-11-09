import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FormatComplexity
/** 
 * Information on the complexity of this Format.
**/
export class FormatComplexity extends SpeakeasyBase {
  @Metadata({ data: "json, name=lodHint" })
  lodHint?: number;

  @Metadata({ data: "json, name=triangleCount" })
  triangleCount?: string;
}
