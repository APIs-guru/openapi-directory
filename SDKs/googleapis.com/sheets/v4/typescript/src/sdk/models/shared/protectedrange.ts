import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Editors } from "./editors";
import { GridRange } from "./gridrange";
import { GridRange } from "./gridrange";


// ProtectedRange
/** 
 * A protected range.
**/
export class ProtectedRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=editors" })
  editors?: Editors;

  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @Metadata({ data: "json, name=protectedRangeId" })
  protectedRangeId?: number;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=requestingUserCanEdit" })
  requestingUserCanEdit?: boolean;

  @Metadata({ data: "json, name=unprotectedRanges", elemType: shared.GridRange })
  unprotectedRanges?: GridRange[];

  @Metadata({ data: "json, name=warningOnly" })
  warningOnly?: boolean;
}
