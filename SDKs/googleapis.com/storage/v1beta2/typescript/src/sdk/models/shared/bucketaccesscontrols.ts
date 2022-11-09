import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BucketAccessControl } from "./bucketaccesscontrol";


// BucketAccessControls
/** 
 * An access-control list.
**/
export class BucketAccessControls extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BucketAccessControl })
  items?: BucketAccessControl[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
