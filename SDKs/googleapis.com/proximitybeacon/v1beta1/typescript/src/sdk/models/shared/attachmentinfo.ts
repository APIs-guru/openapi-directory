import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttachmentInfo
/** 
 * A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.
**/
export class AttachmentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=maxDistanceMeters" })
  maxDistanceMeters?: number;

  @Metadata({ data: "json, name=namespacedType" })
  namespacedType?: string;
}
