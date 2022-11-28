import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectId } from "./objectid";
/**
 * An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
**/
export declare class X509Extension extends SpeakeasyBase {
    critical?: boolean;
    objectId?: ObjectId;
    value?: string;
}
