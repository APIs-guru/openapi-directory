import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ManagedZonePeeringConfigTargetNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=deactivateTime" })
  deactivateTime?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=networkUrl" })
  networkUrl?: string;
}
