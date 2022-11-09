import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileFriendlyIssue } from "./mobilefriendlyissue";
import { ResourceIssue } from "./resourceissue";
import { Image } from "./image";
import { TestStatus } from "./teststatus";
export declare enum RunMobileFriendlyTestResponseMobileFriendlinessEnum {
    MobileFriendlyTestResultUnspecified = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED",
    MobileFriendly = "MOBILE_FRIENDLY",
    NotMobileFriendly = "NOT_MOBILE_FRIENDLY"
}
/**
 * Mobile-friendly test response, including mobile-friendly issues and resource issues.
**/
export declare class RunMobileFriendlyTestResponse extends SpeakeasyBase {
    mobileFriendliness?: RunMobileFriendlyTestResponseMobileFriendlinessEnum;
    mobileFriendlyIssues?: MobileFriendlyIssue[];
    resourceIssues?: ResourceIssue[];
    screenshot?: Image;
    testStatus?: TestStatus;
}
