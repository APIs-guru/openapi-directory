import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameMatchedOut } from "./namematchedout";



export class BatchNameMatchedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchedNames", elemType: NameMatchedOut })
  matchedNames?: NameMatchedOut[];
}
