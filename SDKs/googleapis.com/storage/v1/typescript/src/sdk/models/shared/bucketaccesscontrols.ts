import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BucketAccessControl } from "./bucketaccesscontrol";



// BucketAccessControls
/** 
 * An access-control list.
**/
export class BucketAccessControls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BucketAccessControl })
  items?: BucketAccessControl[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
