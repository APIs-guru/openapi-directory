import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Usage } from "./usage";
import { Usage } from "./usage";

export enum PersistentDiskScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED"
,    ScopeZonal = "SCOPE_ZONAL"
,    ScopeRegional = "SCOPE_REGIONAL"
}


// PersistentDisk
/** 
 * Specification of a persistent disk attached to a VM.
**/
export class PersistentDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSize" })
  diskSize?: Usage;

  @Metadata({ data: "json, name=diskType" })
  diskType?: string;

  @Metadata({ data: "json, name=provisionedIops" })
  provisionedIops?: Usage;

  @Metadata({ data: "json, name=scope" })
  scope?: PersistentDiskScopeEnum;
}
