import { SpeakeasyBase } from "../../../internal/utils";
export declare class BlogListBlog extends SpeakeasyBase {
    categories?: string[][];
    content?: string;
    date?: string;
    lang?: string;
    layout?: string;
    metaDescription?: string;
    metaTitle?: string;
    published?: boolean;
    seoKeywords?: string;
    sort?: number;
    tags?: any[][];
    title?: string;
    topics?: string[][];
    url?: string;
}
export declare class BlogList extends SpeakeasyBase {
    blog?: BlogListBlog[][];
}
