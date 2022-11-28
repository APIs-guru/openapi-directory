import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Editors } from "./editors";
import { GridRange } from "./gridrange";



// ProtectedRange
/** 
 * A protected range.
**/
export class ProtectedRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=editors" })
  editors?: Editors;

  @SpeakeasyMetadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @SpeakeasyMetadata({ data: "json, name=protectedRangeId" })
  protectedRangeId?: number;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=requestingUserCanEdit" })
  requestingUserCanEdit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unprotectedRanges", elemType: GridRange })
  unprotectedRanges?: GridRange[];

  @SpeakeasyMetadata({ data: "json, name=warningOnly" })
  warningOnly?: boolean;
}
