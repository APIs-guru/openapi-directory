import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metaline } from "./metaline";


// ObjectDisplayOptions
/** 
 * The display options for an object.
**/
export class ObjectDisplayOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=metalines", elemType: shared.Metaline })
  metalines?: Metaline[];

  @Metadata({ data: "json, name=objectDisplayLabel" })
  objectDisplayLabel?: string;
}
