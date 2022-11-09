import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectStorageBucket
/** 
 * An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/en/latest/radosgw/s3/#api).
 * 
**/
export class ObjectStorageBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=objects" })
  objects?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;
}
