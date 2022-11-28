import { SpeakeasyBase } from "../../../internal/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";
/**
 * These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
**/
export declare class SubjectConfig extends SpeakeasyBase {
    commonName?: string;
    subject?: Subject;
    subjectAltName?: SubjectAltNames;
}
