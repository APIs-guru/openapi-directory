import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LongviewClientApps
/** 
 * The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
 * 
**/
export class LongviewClientApps extends SpeakeasyBase {
  @Metadata({ data: "json, name=apache" })
  apache?: boolean;

  @Metadata({ data: "json, name=mysql" })
  mysql?: boolean;

  @Metadata({ data: "json, name=nginx" })
  nginx?: boolean;
}


// LongviewClient
/** 
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
 * 
**/
export class LongviewClient extends SpeakeasyBase {
  @Metadata({ data: "json, name=api_key" })
  apiKey?: string;

  @Metadata({ data: "json, name=apps" })
  apps?: LongviewClientApps;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=install_code" })
  installCode?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
