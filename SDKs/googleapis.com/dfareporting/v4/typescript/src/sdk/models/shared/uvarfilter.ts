import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UvarFilterMatchEnum {
    Unspecified = "UNSPECIFIED"
,    Exact = "EXACT"
,    Contains = "CONTAINS"
}


// UvarFilter
/** 
 * Defines the filtering on a single uvar.
**/
export class UvarFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=complement" })
  complement?: boolean;

  @Metadata({ data: "json, name=index" })
  index?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=match" })
  match?: UvarFilterMatchEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
