import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";


export enum PersistentDiskScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeZonal = "SCOPE_ZONAL",
    ScopeRegional = "SCOPE_REGIONAL"
}


// PersistentDisk
/** 
 * Specification of a persistent disk attached to a VM.
**/
export class PersistentDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSize" })
  diskSize?: Usage;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: string;

  @SpeakeasyMetadata({ data: "json, name=provisionedIops" })
  provisionedIops?: Usage;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: PersistentDiskScopeEnum;
}
