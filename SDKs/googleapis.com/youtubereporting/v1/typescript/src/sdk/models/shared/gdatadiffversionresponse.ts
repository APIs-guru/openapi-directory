import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GdataDiffVersionResponse
/** 
 * gdata
**/
export class GdataDiffVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
