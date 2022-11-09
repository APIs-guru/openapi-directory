import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InTotoProvenance } from "./intotoprovenance";
import { InTotoStatement } from "./intotostatement";
import { BuildProvenance } from "./buildprovenance";


// BuildDetails
/** 
 * Message encapsulating build provenance details.
**/
export class BuildDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=intotoProvenance" })
  intotoProvenance?: InTotoProvenance;

  @Metadata({ data: "json, name=intotoStatement" })
  intotoStatement?: InTotoStatement;

  @Metadata({ data: "json, name=provenance" })
  provenance?: BuildProvenance;

  @Metadata({ data: "json, name=provenanceBytes" })
  provenanceBytes?: string;
}
