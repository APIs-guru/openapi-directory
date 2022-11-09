import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationInfo
/** 
 * Application related details of a job posting.
**/
export class ApplicationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=emails" })
  emails?: string[];

  @Metadata({ data: "json, name=instruction" })
  instruction?: string;

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}
