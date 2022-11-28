import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildProvenance } from "./buildprovenance";



// GrafeasV1beta1BuildDetails
/** 
 * Details of a build occurrence.
**/
export class GrafeasV1beta1BuildDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: BuildProvenance;

  @SpeakeasyMetadata({ data: "json, name=provenanceBytes" })
  provenanceBytes?: string;
}
