import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RefJwtVerifier
/** 
 * Reference to a global JWT verifier
**/
export class RefJwtVerifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
