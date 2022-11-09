import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoAgeGating } from "./videoagegating";
import { VideoContentDetails } from "./videocontentdetails";
import { VideoFileDetails } from "./videofiledetails";
import { VideoLiveStreamingDetails } from "./videolivestreamingdetails";
import { VideoLocalization } from "./videolocalization";
import { VideoMonetizationDetails } from "./videomonetizationdetails";
import { VideoPlayer } from "./videoplayer";
import { VideoProcessingDetails } from "./videoprocessingdetails";
import { VideoRecordingDetails } from "./videorecordingdetails";
import { VideoSnippet } from "./videosnippet";
import { VideoStatistics } from "./videostatistics";
import { VideoStatus } from "./videostatus";
import { VideoSuggestions } from "./videosuggestions";
import { VideoTopicDetails } from "./videotopicdetails";


// Video
/** 
 * A *video* resource represents a YouTube video.
**/
export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageGating" })
  ageGating?: VideoAgeGating;

  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: VideoContentDetails;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=fileDetails" })
  fileDetails?: VideoFileDetails;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=liveStreamingDetails" })
  liveStreamingDetails?: VideoLiveStreamingDetails;

  @Metadata({ data: "json, name=localizations", elemType: shared.VideoLocalization })
  localizations?: Map<string, VideoLocalization>;

  @Metadata({ data: "json, name=monetizationDetails" })
  monetizationDetails?: VideoMonetizationDetails;

  @Metadata({ data: "json, name=player" })
  player?: VideoPlayer;

  @Metadata({ data: "json, name=processingDetails" })
  processingDetails?: VideoProcessingDetails;

  @Metadata({ data: "json, name=projectDetails" })
  projectDetails?: Map<string, any>;

  @Metadata({ data: "json, name=recordingDetails" })
  recordingDetails?: VideoRecordingDetails;

  @Metadata({ data: "json, name=snippet" })
  snippet?: VideoSnippet;

  @Metadata({ data: "json, name=statistics" })
  statistics?: VideoStatistics;

  @Metadata({ data: "json, name=status" })
  status?: VideoStatus;

  @Metadata({ data: "json, name=suggestions" })
  suggestions?: VideoSuggestions;

  @Metadata({ data: "json, name=topicDetails" })
  topicDetails?: VideoTopicDetails;
}
