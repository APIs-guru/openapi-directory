import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";


// SubjectDescription
/** 
 * These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
**/
export class SubjectDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=commonName" })
  commonName?: string;

  @Metadata({ data: "json, name=hexSerialNumber" })
  hexSerialNumber?: string;

  @Metadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @Metadata({ data: "json, name=notAfterTime" })
  notAfterTime?: string;

  @Metadata({ data: "json, name=notBeforeTime" })
  notBeforeTime?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: Subject;

  @Metadata({ data: "json, name=subjectAltName" })
  subjectAltName?: SubjectAltNames;
}
