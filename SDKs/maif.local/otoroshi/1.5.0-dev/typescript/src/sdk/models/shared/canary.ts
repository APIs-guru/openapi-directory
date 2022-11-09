import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Target } from "./target";


// Canary
/** 
 * The configuration of the canary mode for a service descriptor
**/
export class Canary extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=root" })
  root: string;

  @Metadata({ data: "json, name=targets", elemType: shared.Target })
  targets: Target[];

  @Metadata({ data: "json, name=traffic" })
  traffic: number;
}
