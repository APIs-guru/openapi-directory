import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Denoise
/** 
 * Denoise preprocessing configuration. **Note:** This configuration is not supported.
**/
export class Denoise extends SpeakeasyBase {
  @Metadata({ data: "json, name=strength" })
  strength?: number;

  @Metadata({ data: "json, name=tune" })
  tune?: string;
}
