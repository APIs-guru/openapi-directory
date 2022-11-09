import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Fingerprint } from "./fingerprint";


// Basis
/** 
 * Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url.
**/
export class Basis extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: Fingerprint;

  @Metadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;
}
