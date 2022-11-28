import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectStorageBucket
/** 
 * An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/en/latest/radosgw/s3/#api).
 * 
**/
export class ObjectStorageBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=objects" })
  objects?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}
