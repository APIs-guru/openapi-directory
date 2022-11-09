import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileFriendlyIssue } from "./mobilefriendlyissue";
import { ResourceIssue } from "./resourceissue";
import { Image } from "./image";
import { TestStatus } from "./teststatus";

export enum RunMobileFriendlyTestResponseMobileFriendlinessEnum {
    MobileFriendlyTestResultUnspecified = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED"
,    MobileFriendly = "MOBILE_FRIENDLY"
,    NotMobileFriendly = "NOT_MOBILE_FRIENDLY"
}


// RunMobileFriendlyTestResponse
/** 
 * Mobile-friendly test response, including mobile-friendly issues and resource issues.
**/
export class RunMobileFriendlyTestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mobileFriendliness" })
  mobileFriendliness?: RunMobileFriendlyTestResponseMobileFriendlinessEnum;

  @Metadata({ data: "json, name=mobileFriendlyIssues", elemType: shared.MobileFriendlyIssue })
  mobileFriendlyIssues?: MobileFriendlyIssue[];

  @Metadata({ data: "json, name=resourceIssues", elemType: shared.ResourceIssue })
  resourceIssues?: ResourceIssue[];

  @Metadata({ data: "json, name=screenshot" })
  screenshot?: Image;

  @Metadata({ data: "json, name=testStatus" })
  testStatus?: TestStatus;
}
