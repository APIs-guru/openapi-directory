import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Denoise
/** 
 * Denoise preprocessing configuration. **Note:** This configuration is not supported.
**/
export class Denoise extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=strength" })
  strength?: number;

  @SpeakeasyMetadata({ data: "json, name=tune" })
  tune?: string;
}
