import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Denoise
/** 
 * Denoise preprocessing configuration.
**/
export class Denoise extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=strength" })
  strength?: number;

  @SpeakeasyMetadata({ data: "json, name=tune" })
  tune?: string;
}
