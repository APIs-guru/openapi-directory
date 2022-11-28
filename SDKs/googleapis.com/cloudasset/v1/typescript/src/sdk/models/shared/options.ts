import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Options
/** 
 * Contains query options.
**/
export class Options extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyzeServiceAccountImpersonation" })
  analyzeServiceAccountImpersonation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expandGroups" })
  expandGroups?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expandResources" })
  expandResources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expandRoles" })
  expandRoles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputGroupEdges" })
  outputGroupEdges?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputResourceEdges" })
  outputResourceEdges?: boolean;
}
