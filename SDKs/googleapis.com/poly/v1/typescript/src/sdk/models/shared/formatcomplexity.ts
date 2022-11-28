import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FormatComplexity
/** 
 * Information on the complexity of this Format.
**/
export class FormatComplexity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lodHint" })
  lodHint?: number;

  @SpeakeasyMetadata({ data: "json, name=triangleCount" })
  triangleCount?: string;
}
