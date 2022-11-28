import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1SystemTimestamps
/** 
 * Timestamps about this resource according to a particular system.
**/
export class GoogleCloudDatacatalogV1beta1SystemTimestamps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudDatacatalogV1beta1SystemTimestampsInput
/** 
 * Timestamps about this resource according to a particular system.
**/
export class GoogleCloudDatacatalogV1beta1SystemTimestampsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
