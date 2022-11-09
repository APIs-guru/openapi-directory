import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetingTemplate } from "./targetingtemplate";


// TargetingTemplatesListResponse
/** 
 * Targeting Template List Response
**/
export class TargetingTemplatesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=targetingTemplates", elemType: shared.TargetingTemplate })
  targetingTemplates?: TargetingTemplate[];
}
