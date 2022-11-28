import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PatientId
/** 
 * A patient identifier and associated type.
**/
export class PatientId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
