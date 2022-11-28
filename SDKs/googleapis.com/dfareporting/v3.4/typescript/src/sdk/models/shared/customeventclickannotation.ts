import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomEventClickAnnotation
/** 
 * Annotate a click event.
**/
export class CustomEventClickAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gclid" })
  gclid?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
