import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertHttpChallenge
/** 
 * Represents an HTTP certificate challenge.
**/
export class CertHttpChallenge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
