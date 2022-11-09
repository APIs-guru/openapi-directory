import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PatientId
/** 
 * A patient identifier and associated type.
**/
export class PatientId extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
