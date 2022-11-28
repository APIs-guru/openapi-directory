import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationInfo
/** 
 * Application related details of a job posting.
**/
export class ApplicationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=instruction" })
  instruction?: string;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}
