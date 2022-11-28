import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudConnectorsV1LockConfig
/** 
 * Determines whether or no a connection is locked. If locked, a reason must be specified.
**/
export class GoogleCloudConnectorsV1LockConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
