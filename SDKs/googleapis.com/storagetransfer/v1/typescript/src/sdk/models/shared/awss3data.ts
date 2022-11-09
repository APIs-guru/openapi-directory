import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsAccessKey } from "./awsaccesskey";


// AwsS3Data
/** 
 * An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.
**/
export class AwsS3Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=awsAccessKey" })
  awsAccessKey?: AwsAccessKey;

  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}
