import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyRangeDataDiskAssignment } from "./keyrangedatadiskassignment";


// StreamingComputationRanges
/** 
 * Describes full or partial data disk assignment information of the computation ranges.
**/
export class StreamingComputationRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=computationId" })
  computationId?: string;

  @Metadata({ data: "json, name=rangeAssignments", elemType: shared.KeyRangeDataDiskAssignment })
  rangeAssignments?: KeyRangeDataDiskAssignment[];
}
