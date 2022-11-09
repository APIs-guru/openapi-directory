import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudSqlInstanceInfo
/** 
 * For display only. Metadata associated with a Cloud SQL instance.
**/
export class CloudSqlInstanceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @Metadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
