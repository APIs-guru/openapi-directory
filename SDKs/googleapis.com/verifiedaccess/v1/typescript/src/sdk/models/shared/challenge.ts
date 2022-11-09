import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SignedData } from "./signeddata";
import { SignedData } from "./signeddata";


// Challenge
/** 
 * Result message for VerifiedAccess.CreateChallenge.
**/
export class Challenge extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternativeChallenge" })
  alternativeChallenge?: SignedData;

  @Metadata({ data: "json, name=challenge" })
  challenge?: SignedData;
}
