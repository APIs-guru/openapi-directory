import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildProvenance } from "./buildprovenance";


// GrafeasV1beta1BuildDetails
/** 
 * Details of a build occurrence.
**/
export class GrafeasV1beta1BuildDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=provenance" })
  provenance?: BuildProvenance;

  @Metadata({ data: "json, name=provenanceBytes" })
  provenanceBytes?: string;
}
