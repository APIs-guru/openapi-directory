import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RefJwtVerifier
/** 
 * Reference to a global JWT verifier
**/
export class RefJwtVerifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
