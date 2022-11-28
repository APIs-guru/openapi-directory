import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleBytestreamMedia
/** 
 * Media resource.
**/
export class GoogleBytestreamMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
