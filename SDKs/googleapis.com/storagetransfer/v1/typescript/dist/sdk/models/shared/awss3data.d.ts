import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAccessKey } from "./awsaccesskey";
/**
 * An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.
**/
export declare class AwsS3Data extends SpeakeasyBase {
    awsAccessKey?: AwsAccessKey;
    bucketName?: string;
    path?: string;
    roleArn?: string;
}
