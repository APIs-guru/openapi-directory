import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchematizedData
/** 
 * The content of an HL7v2 message in a structured format as specified by a schema.
**/
export class SchematizedData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
