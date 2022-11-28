import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InTotoProvenance } from "./intotoprovenance";
import { InTotoStatement } from "./intotostatement";
import { BuildProvenance } from "./buildprovenance";



// BuildDetails
/** 
 * Message encapsulating build provenance details.
**/
export class BuildDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=intotoProvenance" })
  intotoProvenance?: InTotoProvenance;

  @SpeakeasyMetadata({ data: "json, name=intotoStatement" })
  intotoStatement?: InTotoStatement;

  @SpeakeasyMetadata({ data: "json, name=provenance" })
  provenance?: BuildProvenance;

  @SpeakeasyMetadata({ data: "json, name=provenanceBytes" })
  provenanceBytes?: string;
}
