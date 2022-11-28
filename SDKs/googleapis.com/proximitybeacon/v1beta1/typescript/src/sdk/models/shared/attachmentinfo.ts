import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachmentInfo
/** 
 * A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.
**/
export class AttachmentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDistanceMeters" })
  maxDistanceMeters?: number;

  @SpeakeasyMetadata({ data: "json, name=namespacedType" })
  namespacedType?: string;
}
