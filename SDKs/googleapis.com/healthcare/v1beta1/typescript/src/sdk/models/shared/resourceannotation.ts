import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceAnnotation
/** 
 * Resource level annotation.
**/
export class ResourceAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;
}
