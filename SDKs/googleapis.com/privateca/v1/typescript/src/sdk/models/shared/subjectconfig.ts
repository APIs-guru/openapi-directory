import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";


// SubjectConfig
/** 
 * These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
**/
export class SubjectConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=subject" })
  subject?: Subject;

  @Metadata({ data: "json, name=subjectAltName" })
  subjectAltName?: SubjectAltNames;
}
