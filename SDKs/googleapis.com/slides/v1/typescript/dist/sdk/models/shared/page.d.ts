import { SpeakeasyBase } from "../../../internal/utils";
import { LayoutProperties } from "./layoutproperties";
import { MasterProperties } from "./masterproperties";
import { NotesProperties } from "./notesproperties";
import { PageElement } from "./pageelement";
import { PageProperties } from "./pageproperties";
import { SlideProperties } from "./slideproperties";
export declare enum PagePageTypeEnum {
    Slide = "SLIDE",
    Master = "MASTER",
    Layout = "LAYOUT",
    Notes = "NOTES",
    NotesMaster = "NOTES_MASTER"
}
/**
 * A page in a presentation.
**/
export declare class Page extends SpeakeasyBase {
    layoutProperties?: LayoutProperties;
    masterProperties?: MasterProperties;
    notesProperties?: NotesProperties;
    objectId?: string;
    pageElements?: PageElement[];
    pageProperties?: PageProperties;
    pageType?: PagePageTypeEnum;
    revisionId?: string;
    slideProperties?: SlideProperties;
}
