import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CdnSettings } from "./cdnsettings";
import { LiveStreamContentDetails } from "./livestreamcontentdetails";
import { LiveStreamSnippet } from "./livestreamsnippet";
import { LiveStreamStatus } from "./livestreamstatus";


// LiveStream
/** 
 * A live stream describes a live ingestion point.
**/
export class LiveStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=cdn" })
  cdn?: CdnSettings;

  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: LiveStreamContentDetails;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: LiveStreamSnippet;

  @Metadata({ data: "json, name=status" })
  status?: LiveStreamStatus;
}
