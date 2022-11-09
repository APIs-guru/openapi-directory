import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomEventClickAnnotation
/** 
 * Annotate a click event.
**/
export class CustomEventClickAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=gclid" })
  gclid?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
