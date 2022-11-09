import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Deblock
/** 
 * Deblock preprocessing configuration.
**/
export class Deblock extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=strength" })
  strength?: number;
}
