import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertHttpChallenge
/** 
 * Represents an HTTP certificate challenge.
**/
export class CertHttpChallenge extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
