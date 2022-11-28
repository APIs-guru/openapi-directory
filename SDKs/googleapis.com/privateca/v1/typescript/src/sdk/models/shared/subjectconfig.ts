import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";



// SubjectConfig
/** 
 * These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
**/
export class SubjectConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: Subject;

  @SpeakeasyMetadata({ data: "json, name=subjectAltName" })
  subjectAltName?: SubjectAltNames;
}
