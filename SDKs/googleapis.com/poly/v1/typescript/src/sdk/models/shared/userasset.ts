import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";


// UserAsset
/** 
 * Data about the user's asset.
**/
export class UserAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: Asset;
}
