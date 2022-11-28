import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3CompatibleMetadata } from "./s3compatiblemetadata";



// AwsS3CompatibleData
/** 
 * An AwsS3CompatibleData resource.
**/
export class AwsS3CompatibleData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Metadata" })
  s3Metadata?: S3CompatibleMetadata;
}
