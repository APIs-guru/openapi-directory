import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NameMatchedOut } from "./namematchedout";


export class BatchNameMatchedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchedNames", elemType: shared.NameMatchedOut })
  matchedNames?: NameMatchedOut[];
}
