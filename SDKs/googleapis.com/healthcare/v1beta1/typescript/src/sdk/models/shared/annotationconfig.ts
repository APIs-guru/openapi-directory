import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnnotationConfig
/** 
 * Specifies how to store annotations during de-identification operation.
**/
export class AnnotationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationStoreName" })
  annotationStoreName?: string;

  @SpeakeasyMetadata({ data: "json, name=storeQuote" })
  storeQuote?: boolean;
}
