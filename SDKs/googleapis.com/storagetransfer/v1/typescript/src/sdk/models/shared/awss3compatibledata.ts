import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3CompatibleMetadata } from "./s3compatiblemetadata";


// AwsS3CompatibleData
/** 
 * An AwsS3CompatibleData resource.
**/
export class AwsS3CompatibleData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=s3Metadata" })
  s3Metadata?: S3CompatibleMetadata;
}
