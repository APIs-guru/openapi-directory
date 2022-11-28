import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Deblock
/** 
 * Deblock preprocessing configuration.
**/
export class Deblock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strength" })
  strength?: number;
}
