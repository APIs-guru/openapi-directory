import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
**/
export declare class AwsAccessKey extends SpeakeasyBase {
    accessKeyId?: string;
    secretAccessKey?: string;
}
