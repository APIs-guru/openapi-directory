import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CdnSettings } from "./cdnsettings";
import { LiveStreamContentDetails } from "./livestreamcontentdetails";
import { LiveStreamSnippet } from "./livestreamsnippet";
import { LiveStreamStatus } from "./livestreamstatus";



// LiveStream
/** 
 * A live stream describes a live ingestion point.
**/
export class LiveStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cdn" })
  cdn?: CdnSettings;

  @SpeakeasyMetadata({ data: "json, name=contentDetails" })
  contentDetails?: LiveStreamContentDetails;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: LiveStreamSnippet;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LiveStreamStatus;
}
