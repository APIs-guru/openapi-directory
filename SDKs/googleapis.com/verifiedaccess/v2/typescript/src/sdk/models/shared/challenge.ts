import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Challenge
/** 
 * Result message for VerifiedAccess.GenerateChallenge.
**/
export class Challenge extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternativeChallenge" })
  alternativeChallenge?: string;

  @Metadata({ data: "json, name=challenge" })
  challenge?: string;
}
