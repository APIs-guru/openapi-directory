import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MutationRecord
/** 
 * Describes a change made to a configuration.
**/
export class MutationRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=mutateTime" })
  mutateTime?: string;

  @Metadata({ data: "json, name=mutatedBy" })
  mutatedBy?: string;
}
