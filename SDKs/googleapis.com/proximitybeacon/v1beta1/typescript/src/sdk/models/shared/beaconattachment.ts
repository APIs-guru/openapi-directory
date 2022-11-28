import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BeaconAttachment
/** 
 * Project-specific data associated with a beacon.
**/
export class BeaconAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentName" })
  attachmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTimeMs" })
  creationTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDistanceMeters" })
  maxDistanceMeters?: number;

  @SpeakeasyMetadata({ data: "json, name=namespacedType" })
  namespacedType?: string;
}
