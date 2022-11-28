import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Object Storage Bucket. This should be accessed primarily through the S3 API; [click here for more information](https://docs.ceph.com/en/latest/radosgw/s3/#api).
 *
**/
export declare class ObjectStorageBucket extends SpeakeasyBase {
    cluster?: string;
    created?: Date;
    hostname?: string;
    label?: string;
    objects?: number;
    size?: number;
}
