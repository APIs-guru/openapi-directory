import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManagedZoneReverseLookupConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
