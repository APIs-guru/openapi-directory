import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Browser
/** 
 * Contains information about a browser that can be targeted by ads.
**/
export class Browser extends SpeakeasyBase {
  @Metadata({ data: "json, name=browserVersionId" })
  browserVersionId?: string;

  @Metadata({ data: "json, name=dartId" })
  dartId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
