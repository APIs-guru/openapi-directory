import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchematizedData
/** 
 * The content of an HL7v2 message in a structured format as specified by a schema.
**/
export class SchematizedData extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;
}
