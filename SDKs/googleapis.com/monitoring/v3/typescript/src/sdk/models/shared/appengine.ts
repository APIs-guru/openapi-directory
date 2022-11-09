import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AppEngine
/** 
 * App Engine service. Learn more at https://cloud.google.com/appengine.
**/
export class AppEngine extends SpeakeasyBase {
  @Metadata({ data: "json, name=moduleId" })
  moduleId?: string;
}
