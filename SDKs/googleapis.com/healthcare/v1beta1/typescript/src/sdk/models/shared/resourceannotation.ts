import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceAnnotation
/** 
 * Resource level annotation.
**/
export class ResourceAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
