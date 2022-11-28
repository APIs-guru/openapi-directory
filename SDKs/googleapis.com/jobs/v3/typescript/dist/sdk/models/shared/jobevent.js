var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var JobEventTypeEnum;
(function (JobEventTypeEnum) {
    JobEventTypeEnum["JobEventTypeUnspecified"] = "JOB_EVENT_TYPE_UNSPECIFIED";
    JobEventTypeEnum["Impression"] = "IMPRESSION";
    JobEventTypeEnum["View"] = "VIEW";
    JobEventTypeEnum["ViewRedirect"] = "VIEW_REDIRECT";
    JobEventTypeEnum["ApplicationStart"] = "APPLICATION_START";
    JobEventTypeEnum["ApplicationFinish"] = "APPLICATION_FINISH";
    JobEventTypeEnum["ApplicationQuickSubmission"] = "APPLICATION_QUICK_SUBMISSION";
    JobEventTypeEnum["ApplicationRedirect"] = "APPLICATION_REDIRECT";
    JobEventTypeEnum["ApplicationStartFromSearch"] = "APPLICATION_START_FROM_SEARCH";
    JobEventTypeEnum["ApplicationRedirectFromSearch"] = "APPLICATION_REDIRECT_FROM_SEARCH";
    JobEventTypeEnum["ApplicationCompanySubmit"] = "APPLICATION_COMPANY_SUBMIT";
    JobEventTypeEnum["Bookmark"] = "BOOKMARK";
    JobEventTypeEnum["Notification"] = "NOTIFICATION";
    JobEventTypeEnum["Hired"] = "HIRED";
    JobEventTypeEnum["SentCv"] = "SENT_CV";
    JobEventTypeEnum["InterviewGranted"] = "INTERVIEW_GRANTED";
    JobEventTypeEnum["NotInterested"] = "NOT_INTERESTED";
})(JobEventTypeEnum || (JobEventTypeEnum = {}));
// JobEvent
/**
 * An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
**/
var JobEvent = /** @class */ (function (_super) {
    __extends(JobEvent, _super);
    function JobEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobs" }),
        __metadata("design:type", Array)
    ], JobEvent.prototype, "jobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], JobEvent.prototype, "type", void 0);
    return JobEvent;
}(SpeakeasyBase));
export { JobEvent };
