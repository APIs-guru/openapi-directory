import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionProposal } from "./regionproposal";


export class ImageRegionProposal extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageId" })
  imageId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=proposals", elemType: shared.RegionProposal })
  proposals?: RegionProposal[];
}
