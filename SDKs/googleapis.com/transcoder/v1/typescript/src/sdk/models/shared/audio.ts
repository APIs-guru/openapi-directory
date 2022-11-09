import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Audio
/** 
 * Audio preprocessing configuration.
**/
export class Audio extends SpeakeasyBase {
  @Metadata({ data: "json, name=highBoost" })
  highBoost?: boolean;

  @Metadata({ data: "json, name=lowBoost" })
  lowBoost?: boolean;

  @Metadata({ data: "json, name=lufs" })
  lufs?: number;
}
