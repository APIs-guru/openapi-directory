import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileFriendlyIssue } from "./mobilefriendlyissue";
import { ResourceIssue } from "./resourceissue";
import { Image } from "./image";
import { TestStatus } from "./teststatus";


export enum RunMobileFriendlyTestResponseMobileFriendlinessEnum {
    MobileFriendlyTestResultUnspecified = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED",
    MobileFriendly = "MOBILE_FRIENDLY",
    NotMobileFriendly = "NOT_MOBILE_FRIENDLY"
}


// RunMobileFriendlyTestResponse
/** 
 * Mobile-friendly test response, including mobile-friendly issues and resource issues.
**/
export class RunMobileFriendlyTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mobileFriendliness" })
  mobileFriendliness?: RunMobileFriendlyTestResponseMobileFriendlinessEnum;

  @SpeakeasyMetadata({ data: "json, name=mobileFriendlyIssues", elemType: MobileFriendlyIssue })
  mobileFriendlyIssues?: MobileFriendlyIssue[];

  @SpeakeasyMetadata({ data: "json, name=resourceIssues", elemType: ResourceIssue })
  resourceIssues?: ResourceIssue[];

  @SpeakeasyMetadata({ data: "json, name=screenshot" })
  screenshot?: Image;

  @SpeakeasyMetadata({ data: "json, name=testStatus" })
  testStatus?: TestStatus;
}
