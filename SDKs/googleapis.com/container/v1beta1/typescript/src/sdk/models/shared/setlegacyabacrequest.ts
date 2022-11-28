import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetLegacyAbacRequest
/** 
 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.
**/
export class SetLegacyAbacRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
