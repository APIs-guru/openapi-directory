import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";



// SlideProperties
/** 
 * The properties of Page that are only relevant for pages with page_type SLIDE.
**/
export class SlideProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isSkipped" })
  isSkipped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=layoutObjectId" })
  layoutObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=masterObjectId" })
  masterObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=notesPage" })
  notesPage?: Page;
}
