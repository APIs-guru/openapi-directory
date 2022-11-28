import { SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";
/**
 * The properties of Page that are only relevant for pages with page_type SLIDE.
**/
export declare class SlideProperties extends SpeakeasyBase {
    isSkipped?: boolean;
    layoutObjectId?: string;
    masterObjectId?: string;
    notesPage?: Page;
}
