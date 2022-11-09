import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetLegacyAbacRequest
/** 
 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.
**/
export class SetLegacyAbacRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
