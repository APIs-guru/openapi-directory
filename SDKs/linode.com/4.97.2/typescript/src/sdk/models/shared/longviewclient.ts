import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LongviewClientApps
/** 
 * The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
 * 
**/
export class LongviewClientApps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apache" })
  apache?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mysql" })
  mysql?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nginx" })
  nginx?: boolean;
}


// LongviewClient
/** 
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
 * 
**/
export class LongviewClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=apps" })
  apps?: LongviewClientApps;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=install_code" })
  installCode?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}


// LongviewClientInput
/** 
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
 * 
**/
export class LongviewClientInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
