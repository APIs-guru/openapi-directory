import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudSqlInstanceInfo
/** 
 * For display only. Metadata associated with a Cloud SQL instance.
**/
export class CloudSqlInstanceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
