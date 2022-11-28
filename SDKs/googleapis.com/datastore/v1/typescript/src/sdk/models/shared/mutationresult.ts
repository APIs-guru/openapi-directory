import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";



// MutationResult
/** 
 * The result of applying a mutation.
**/
export class MutationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictDetected" })
  conflictDetected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: Key;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
