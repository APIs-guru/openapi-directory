import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1SystemTimestampsInput
/** 
 * Timestamps associated with this resource in a particular system.
**/
export class GoogleCloudDatacatalogV1SystemTimestampsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudDatacatalogV1SystemTimestamps
/** 
 * Timestamps associated with this resource in a particular system.
**/
export class GoogleCloudDatacatalogV1SystemTimestamps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
