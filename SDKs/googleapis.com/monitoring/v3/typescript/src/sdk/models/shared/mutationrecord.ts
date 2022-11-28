import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MutationRecord
/** 
 * Describes a change made to a configuration.
**/
export class MutationRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mutateTime" })
  mutateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=mutatedBy" })
  mutatedBy?: string;
}
