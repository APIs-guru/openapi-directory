import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Challenge
/** 
 * Result message for VerifiedAccess.GenerateChallenge.
**/
export class Challenge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternativeChallenge" })
  alternativeChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;
}
