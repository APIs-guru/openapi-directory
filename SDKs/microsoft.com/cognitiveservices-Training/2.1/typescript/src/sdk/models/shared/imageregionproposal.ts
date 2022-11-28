import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionProposal } from "./regionproposal";



export class ImageRegionProposal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=proposals", elemType: RegionProposal })
  proposals?: RegionProposal[];
}
