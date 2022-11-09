import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1SystemTimestamps
/** 
 * Timestamps associated with this resource in a particular system.
**/
export class GoogleCloudDatacatalogV1SystemTimestamps extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
