import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1beta1SystemTimestamps
/** 
 * Timestamps about this resource according to a particular system.
**/
export class GoogleCloudDatacatalogV1beta1SystemTimestamps extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
