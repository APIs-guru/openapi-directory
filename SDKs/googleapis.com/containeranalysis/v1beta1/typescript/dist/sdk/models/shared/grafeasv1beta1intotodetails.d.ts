import { SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1beta1IntotoSignature } from "./grafeasv1beta1intotosignature";
import { Link } from "./link";
/**
 * This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.
**/
export declare class GrafeasV1beta1IntotoDetails extends SpeakeasyBase {
    signatures?: GrafeasV1beta1IntotoSignature[];
    signed?: Link;
}
