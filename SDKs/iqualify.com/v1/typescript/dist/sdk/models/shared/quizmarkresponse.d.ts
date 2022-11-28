import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuizMarkResponse extends SpeakeasyBase {
    attempts?: number;
    lastAttemptAt?: Date;
    learnerEmail?: string;
    learnerFullname?: string;
    learnerPersonId?: string;
    mark?: string;
    quizId?: string;
    quizTitle?: string;
}
