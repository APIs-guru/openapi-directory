import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiffVersionResponse
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DiffVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectSizeBytes" })
  objectSizeBytes?: string;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
