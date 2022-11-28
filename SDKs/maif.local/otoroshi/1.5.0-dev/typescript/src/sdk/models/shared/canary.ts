import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";



// Canary
/** 
 * The configuration of the canary mode for a service descriptor
**/
export class Canary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=root" })
  root: string;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: Target })
  targets: Target[];

  @SpeakeasyMetadata({ data: "json, name=traffic" })
  traffic: number;
}
