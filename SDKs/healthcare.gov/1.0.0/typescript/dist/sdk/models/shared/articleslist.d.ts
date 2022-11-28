import { SpeakeasyBase } from "../../../internal/utils";
export declare class ArticlesListArticles extends SpeakeasyBase {
    bite?: string;
    categories?: string[][];
    content?: string;
    date?: string;
    excerpt?: string;
    featured?: boolean;
    id?: string;
    lang?: string;
    layout?: string;
    metaDescription?: string;
    metaTitle?: string;
    path?: string;
    published?: boolean;
    related?: string[][];
    seoKeywords?: string;
    sort?: number;
    tags?: any[][];
    title?: string;
    titleShort?: string;
    topics?: string[][];
    url?: string;
}
export declare class ArticlesList extends SpeakeasyBase {
    articles?: ArticlesListArticles[];
}
