import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebAppConfig
/** 
 * Configuration metadata of a single Firebase App for the web.
**/
export class WebAppConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=authDomain" })
  authDomain?: string;

  @Metadata({ data: "json, name=databaseURL" })
  databaseUrl?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=measurementId" })
  measurementId?: string;

  @Metadata({ data: "json, name=messagingSenderId" })
  messagingSenderId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=storageBucket" })
  storageBucket?: string;
}
