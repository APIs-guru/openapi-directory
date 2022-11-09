import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsAccessKey
/** 
 * AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
**/
export class AwsAccessKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=secretAccessKey" })
  secretAccessKey?: string;
}
