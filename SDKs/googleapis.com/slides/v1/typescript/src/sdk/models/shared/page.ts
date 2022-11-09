import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LayoutProperties } from "./layoutproperties";
import { MasterProperties } from "./masterproperties";
import { NotesProperties } from "./notesproperties";
import { PageElement } from "./pageelement";
import { PageProperties } from "./pageproperties";
import { SlideProperties } from "./slideproperties";

export enum PagePageTypeEnum {
    Slide = "SLIDE"
,    Master = "MASTER"
,    Layout = "LAYOUT"
,    Notes = "NOTES"
,    NotesMaster = "NOTES_MASTER"
}


// Page
/** 
 * A page in a presentation.
**/
export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=layoutProperties" })
  layoutProperties?: LayoutProperties;

  @Metadata({ data: "json, name=masterProperties" })
  masterProperties?: MasterProperties;

  @Metadata({ data: "json, name=notesProperties" })
  notesProperties?: NotesProperties;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=pageElements", elemType: shared.PageElement })
  pageElements?: PageElement[];

  @Metadata({ data: "json, name=pageProperties" })
  pageProperties?: PageProperties;

  @Metadata({ data: "json, name=pageType" })
  pageType?: PagePageTypeEnum;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=slideProperties" })
  slideProperties?: SlideProperties;
}
