import { SpeakeasyBase } from "../../../internal/utils";
import { Fingerprint } from "./fingerprint";
/**
 * Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g., a tag of the resource_url.
**/
export declare class ImageNote extends SpeakeasyBase {
    fingerprint?: Fingerprint;
    resourceUrl?: string;
}
