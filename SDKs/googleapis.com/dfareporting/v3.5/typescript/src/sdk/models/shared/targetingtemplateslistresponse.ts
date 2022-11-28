import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingTemplate } from "./targetingtemplate";



// TargetingTemplatesListResponse
/** 
 * Targeting Template List Response
**/
export class TargetingTemplatesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingTemplates", elemType: TargetingTemplate })
  targetingTemplates?: TargetingTemplate[];
}
