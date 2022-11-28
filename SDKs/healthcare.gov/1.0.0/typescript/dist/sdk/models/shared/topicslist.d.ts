import { SpeakeasyBase } from "../../../internal/utils";
export declare class TopicsListTopics extends SpeakeasyBase {
    articleorder?: string[][];
    categories?: any[][];
    content?: string;
    date?: string;
    excerpt?: string;
    id?: string;
    lang?: string;
    layout?: string;
    metaDescription?: string;
    metaTitle?: string;
    order?: number;
    path?: string;
    published?: boolean;
    sort?: number;
    tags?: string[][];
    title?: string;
    url?: string;
}
export declare class TopicsList extends SpeakeasyBase {
    topics?: TopicsListTopics[];
}
