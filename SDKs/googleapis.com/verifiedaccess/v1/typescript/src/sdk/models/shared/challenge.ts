import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SignedData } from "./signeddata";



// Challenge
/** 
 * Result message for VerifiedAccess.CreateChallenge.
**/
export class Challenge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternativeChallenge" })
  alternativeChallenge?: SignedData;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: SignedData;
}
