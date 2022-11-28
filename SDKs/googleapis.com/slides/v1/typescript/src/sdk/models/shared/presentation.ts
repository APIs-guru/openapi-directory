import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";
import { Size } from "./size";



// Presentation
/** 
 * A Google Slides presentation.
**/
export class Presentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layouts", elemType: Page })
  layouts?: Page[];

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=masters", elemType: Page })
  masters?: Page[];

  @SpeakeasyMetadata({ data: "json, name=notesMaster" })
  notesMaster?: Page;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: Size;

  @SpeakeasyMetadata({ data: "json, name=presentationId" })
  presentationId?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=slides", elemType: Page })
  slides?: Page[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
