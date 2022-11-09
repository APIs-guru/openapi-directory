import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum JobEventTypeEnum {
    JobEventTypeUnspecified = "JOB_EVENT_TYPE_UNSPECIFIED"
,    Impression = "IMPRESSION"
,    View = "VIEW"
,    ViewRedirect = "VIEW_REDIRECT"
,    ApplicationStart = "APPLICATION_START"
,    ApplicationFinish = "APPLICATION_FINISH"
,    ApplicationQuickSubmission = "APPLICATION_QUICK_SUBMISSION"
,    ApplicationRedirect = "APPLICATION_REDIRECT"
,    ApplicationStartFromSearch = "APPLICATION_START_FROM_SEARCH"
,    ApplicationRedirectFromSearch = "APPLICATION_REDIRECT_FROM_SEARCH"
,    ApplicationCompanySubmit = "APPLICATION_COMPANY_SUBMIT"
,    Bookmark = "BOOKMARK"
,    Notification = "NOTIFICATION"
,    Hired = "HIRED"
,    SentCv = "SENT_CV"
,    InterviewGranted = "INTERVIEW_GRANTED"
,    NotInterested = "NOT_INTERESTED"
}


// JobEvent
/** 
 * An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
**/
export class JobEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs" })
  jobs?: string[];

  @Metadata({ data: "json, name=type" })
  type?: JobEventTypeEnum;
}
