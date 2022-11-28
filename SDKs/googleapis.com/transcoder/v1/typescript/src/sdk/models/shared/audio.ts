import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Audio
/** 
 * Audio preprocessing configuration.
**/
export class Audio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=highBoost" })
  highBoost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lowBoost" })
  lowBoost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lufs" })
  lufs?: number;
}
