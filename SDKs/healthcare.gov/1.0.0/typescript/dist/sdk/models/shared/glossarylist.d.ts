import { SpeakeasyBase } from "../../../internal/utils";
export declare class GlossaryListGlossary extends SpeakeasyBase {
    categories?: string[];
    content?: string;
    date?: string;
    excerpt?: string;
    id?: string;
    lang?: string;
    layout?: string;
    path?: string;
    published?: boolean;
    sort?: number;
    tags?: string[];
    title?: string;
    url?: string;
}
export declare class GlossaryList extends SpeakeasyBase {
    glossary?: GlossaryListGlossary[];
}
