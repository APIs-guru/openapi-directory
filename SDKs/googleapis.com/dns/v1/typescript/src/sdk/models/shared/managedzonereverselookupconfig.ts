import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ManagedZoneReverseLookupConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
