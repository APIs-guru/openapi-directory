import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppEngineRouting
/** 
 * App Engine Routing. For more information about services, versions, and instances see [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine), [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine), [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed), and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
**/
export class AppEngineRouting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
