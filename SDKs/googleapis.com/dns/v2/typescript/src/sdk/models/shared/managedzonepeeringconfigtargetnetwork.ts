import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManagedZonePeeringConfigTargetNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deactivateTime" })
  deactivateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=networkUrl" })
  networkUrl?: string;
}
