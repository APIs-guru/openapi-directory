import { SpeakeasyBase } from "../../../internal/utils";
export declare class QuestionsListQuestions extends SpeakeasyBase {
    categories?: string[];
    content?: string;
    date?: string;
    excerpt?: string;
    id?: string;
    lang?: string;
    path?: string;
    published?: boolean;
    sort?: number;
    tags?: string[];
    title?: string;
    url?: string;
}
export declare class QuestionsList extends SpeakeasyBase {
    questions?: QuestionsListQuestions[];
}
