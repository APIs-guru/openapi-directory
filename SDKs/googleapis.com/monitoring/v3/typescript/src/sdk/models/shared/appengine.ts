import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppEngine
/** 
 * App Engine service. Learn more at https://cloud.google.com/appengine.
**/
export class AppEngine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=moduleId" })
  moduleId?: string;
}
