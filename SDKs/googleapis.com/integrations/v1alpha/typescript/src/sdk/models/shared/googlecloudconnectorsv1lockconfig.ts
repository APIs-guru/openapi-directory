import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudConnectorsV1LockConfig
/** 
 * Determines whether or no a connection is locked. If locked, a reason must be specified.
**/
export class GoogleCloudConnectorsV1LockConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
