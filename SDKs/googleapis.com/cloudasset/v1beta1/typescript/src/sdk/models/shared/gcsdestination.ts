import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsDestination
/** 
 * A Cloud Storage location.
**/
export class GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=uriPrefix" })
  uriPrefix?: string;
}
