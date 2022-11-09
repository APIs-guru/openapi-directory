import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Page } from "./page";
import { Page } from "./page";
import { Page } from "./page";
import { Size } from "./size";
import { Page } from "./page";


// Presentation
/** 
 * A Google Slides presentation.
**/
export class Presentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=layouts", elemType: shared.Page })
  layouts?: Page[];

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=masters", elemType: shared.Page })
  masters?: Page[];

  @Metadata({ data: "json, name=notesMaster" })
  notesMaster?: Page;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: Size;

  @Metadata({ data: "json, name=presentationId" })
  presentationId?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=slides", elemType: shared.Page })
  slides?: Page[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
