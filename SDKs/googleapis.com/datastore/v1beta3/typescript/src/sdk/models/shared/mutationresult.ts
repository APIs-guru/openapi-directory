import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Key } from "./key";


// MutationResult
/** 
 * The result of applying a mutation.
**/
export class MutationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=conflictDetected" })
  conflictDetected?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: Key;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
