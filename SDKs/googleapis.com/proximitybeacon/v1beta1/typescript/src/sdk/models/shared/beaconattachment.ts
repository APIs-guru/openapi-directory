import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BeaconAttachment
/** 
 * Project-specific data associated with a beacon.
**/
export class BeaconAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentName" })
  attachmentName?: string;

  @Metadata({ data: "json, name=creationTimeMs" })
  creationTimeMs?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=maxDistanceMeters" })
  maxDistanceMeters?: number;

  @Metadata({ data: "json, name=namespacedType" })
  namespacedType?: string;
}
