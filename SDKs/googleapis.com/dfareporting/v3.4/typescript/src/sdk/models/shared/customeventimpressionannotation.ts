import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomEventImpressionAnnotation
/** 
 * Annotate an impression.
**/
export class CustomEventImpressionAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pathImpressionId" })
  pathImpressionId?: string;
}
