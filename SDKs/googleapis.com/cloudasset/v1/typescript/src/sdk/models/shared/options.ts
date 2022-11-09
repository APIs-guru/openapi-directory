import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Options
/** 
 * Contains query options.
**/
export class Options extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyzeServiceAccountImpersonation" })
  analyzeServiceAccountImpersonation?: boolean;

  @Metadata({ data: "json, name=expandGroups" })
  expandGroups?: boolean;

  @Metadata({ data: "json, name=expandResources" })
  expandResources?: boolean;

  @Metadata({ data: "json, name=expandRoles" })
  expandRoles?: boolean;

  @Metadata({ data: "json, name=outputGroupEdges" })
  outputGroupEdges?: boolean;

  @Metadata({ data: "json, name=outputResourceEdges" })
  outputResourceEdges?: boolean;
}
