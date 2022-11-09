import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SslCertsInsertRequest
/** 
 * SslCerts insert request.
**/
export class SslCertsInsertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=commonName" })
  commonName?: string;
}
