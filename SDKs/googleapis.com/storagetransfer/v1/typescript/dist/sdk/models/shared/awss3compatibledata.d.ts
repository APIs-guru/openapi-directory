import { SpeakeasyBase } from "../../../internal/utils";
import { S3CompatibleMetadata } from "./s3compatiblemetadata";
/**
 * An AwsS3CompatibleData resource.
**/
export declare class AwsS3CompatibleData extends SpeakeasyBase {
    bucketName?: string;
    endpoint?: string;
    path?: string;
    region?: string;
    s3Metadata?: S3CompatibleMetadata;
}
