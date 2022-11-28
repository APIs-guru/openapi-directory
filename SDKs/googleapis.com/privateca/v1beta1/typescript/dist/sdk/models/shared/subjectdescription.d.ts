import { SpeakeasyBase } from "../../../internal/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";
/**
 * These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
**/
export declare class SubjectDescription extends SpeakeasyBase {
    commonName?: string;
    hexSerialNumber?: string;
    lifetime?: string;
    notAfterTime?: string;
    notBeforeTime?: string;
    subject?: Subject;
    subjectAltName?: SubjectAltNames;
}
