import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";



// SubjectDescription
/** 
 * These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
**/
export class SubjectDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hexSerialNumber" })
  hexSerialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=notAfterTime" })
  notAfterTime?: string;

  @SpeakeasyMetadata({ data: "json, name=notBeforeTime" })
  notBeforeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: Subject;

  @SpeakeasyMetadata({ data: "json, name=subjectAltName" })
  subjectAltName?: SubjectAltNames;
}
