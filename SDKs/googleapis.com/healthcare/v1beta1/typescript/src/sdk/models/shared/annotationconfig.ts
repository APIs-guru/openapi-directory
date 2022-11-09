import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnnotationConfig
/** 
 * Specifies how to store annotations during de-identification operation.
**/
export class AnnotationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationStoreName" })
  annotationStoreName?: string;

  @Metadata({ data: "json, name=storeQuote" })
  storeQuote?: boolean;
}
