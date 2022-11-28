import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityAttemptOpenResponseFeedback } from "./activityattemptopenresponsefeedback";
import { ActivityAttemptOpenResponseFiles } from "./activityattemptopenresponsefiles";
export declare class ActivityAttemptOpenResponse extends SpeakeasyBase {
    activityId?: string;
    activityType?: string;
    feedback?: ActivityAttemptOpenResponseFeedback;
    learnerEmail?: string;
    offeringId?: string;
    responseText?: string;
    uploadedFiles?: ActivityAttemptOpenResponseFiles;
}
