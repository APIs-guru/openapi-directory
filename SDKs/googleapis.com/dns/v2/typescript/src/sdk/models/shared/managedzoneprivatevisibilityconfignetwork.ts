import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ManagedZonePrivateVisibilityConfigNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=networkUrl" })
  networkUrl?: string;
}
