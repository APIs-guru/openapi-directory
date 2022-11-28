import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SslCertsInsertRequest
/** 
 * SslCerts insert request.
**/
export class SslCertsInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: string;
}
