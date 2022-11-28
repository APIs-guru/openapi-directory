import { SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";
import { Size } from "./size";
/**
 * A Google Slides presentation.
**/
export declare class Presentation extends SpeakeasyBase {
    layouts?: Page[];
    locale?: string;
    masters?: Page[];
    notesMaster?: Page;
    pageSize?: Size;
    presentationId?: string;
    revisionId?: string;
    slides?: Page[];
    title?: string;
}
