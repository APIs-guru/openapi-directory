import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Page } from "./page";


// SlideProperties
/** 
 * The properties of Page that are only relevant for pages with page_type SLIDE.
**/
export class SlideProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=isSkipped" })
  isSkipped?: boolean;

  @Metadata({ data: "json, name=layoutObjectId" })
  layoutObjectId?: string;

  @Metadata({ data: "json, name=masterObjectId" })
  masterObjectId?: string;

  @Metadata({ data: "json, name=notesPage" })
  notesPage?: Page;
}
