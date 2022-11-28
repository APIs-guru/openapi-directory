import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Browser
/** 
 * Contains information about a browser that can be targeted by ads.
**/
export class Browser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=browserVersionId" })
  browserVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=dartId" })
  dartId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
