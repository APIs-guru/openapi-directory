import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebAppConfig
/** 
 * Configuration metadata of a single Firebase App for the web.
**/
export class WebAppConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=authDomain" })
  authDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseURL" })
  databaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementId" })
  measurementId?: string;

  @SpeakeasyMetadata({ data: "json, name=messagingSenderId" })
  messagingSenderId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=storageBucket" })
  storageBucket?: string;
}
