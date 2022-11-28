import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsSecurityGroup
/** 
 * AwsSecurityGroup describes a security group of an AWS VM.
**/
export class AwsSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
