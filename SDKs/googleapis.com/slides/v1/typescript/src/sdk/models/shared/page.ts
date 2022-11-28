import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LayoutProperties } from "./layoutproperties";
import { MasterProperties } from "./masterproperties";
import { NotesProperties } from "./notesproperties";
import { PageElement } from "./pageelement";
import { PageProperties } from "./pageproperties";
import { SlideProperties } from "./slideproperties";


export enum PagePageTypeEnum {
    Slide = "SLIDE",
    Master = "MASTER",
    Layout = "LAYOUT",
    Notes = "NOTES",
    NotesMaster = "NOTES_MASTER"
}


// Page
/** 
 * A page in a presentation.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layoutProperties" })
  layoutProperties?: LayoutProperties;

  @SpeakeasyMetadata({ data: "json, name=masterProperties" })
  masterProperties?: MasterProperties;

  @SpeakeasyMetadata({ data: "json, name=notesProperties" })
  notesProperties?: NotesProperties;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageElements", elemType: PageElement })
  pageElements?: PageElement[];

  @SpeakeasyMetadata({ data: "json, name=pageProperties" })
  pageProperties?: PageProperties;

  @SpeakeasyMetadata({ data: "json, name=pageType" })
  pageType?: PagePageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=slideProperties" })
  slideProperties?: SlideProperties;
}
