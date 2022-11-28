import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomEventImpressionAnnotation
/** 
 * Annotate an impression.
**/
export class CustomEventImpressionAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pathImpressionId" })
  pathImpressionId?: string;
}
