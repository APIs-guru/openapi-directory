import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleBytestreamMedia
/** 
 * Media resource.
**/
export class GoogleBytestreamMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
