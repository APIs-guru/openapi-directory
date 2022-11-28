import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { ThemeResponse } from "./themeresponse";
import { User } from "./user";
export declare class AssessmentPendingSubmission extends SpeakeasyBase {
    content?: string;
    documents?: Document[];
    dueDate?: Date;
    durationMinutes?: number;
    filename?: string;
    hidden?: boolean;
    id?: string;
    markNumber?: string;
    markType?: string;
    maxAttempts?: number;
    offeringId?: string;
    offeringName?: string;
    openDate?: Date;
    pid?: string;
    points?: string;
    themes?: ThemeResponse[];
    title?: string;
    totalQuestions?: number;
    totalThemes?: number;
    type?: string;
    users?: User[];
}
