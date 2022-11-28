import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssignmentMarkResponse extends SpeakeasyBase {
    assessmentId?: string;
    assessmentItemDetails?: string;
    assessmentItemName?: string;
    courseName?: string;
    learnerEmail?: string;
    learnerFirstName?: string;
    learnerLastName?: string;
    learnerPersonId?: string;
    mark?: string;
    markFeedback?: string;
    markedBy?: string;
    markedByEvaluator?: boolean;
    markedByFacilitator?: boolean;
    markedByMarker?: boolean;
    markedDateTime?: Date;
    submissionDateTime?: Date;
}
