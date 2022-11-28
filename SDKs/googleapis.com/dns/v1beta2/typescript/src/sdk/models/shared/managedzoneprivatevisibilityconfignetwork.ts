import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManagedZonePrivateVisibilityConfigNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=networkUrl" })
  networkUrl?: string;
}
