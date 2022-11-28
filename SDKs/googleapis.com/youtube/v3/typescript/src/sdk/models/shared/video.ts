import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ageGating" })
  ageGating?: VideoAgeGating;

  @SpeakeasyMetadata({ data: "json, name=contentDetails" })
  contentDetails?: VideoContentDetails;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fileDetails" })
  fileDetails?: VideoFileDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=liveStreamingDetails" })
  liveStreamingDetails?: VideoLiveStreamingDetails;

  @SpeakeasyMetadata({ data: "json, name=localizations", elemType: VideoLocalization })
  localizations?: Map<string, VideoLocalization>;

  @SpeakeasyMetadata({ data: "json, name=monetizationDetails" })
  monetizationDetails?: VideoMonetizationDetails;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: VideoPlayer;

  @SpeakeasyMetadata({ data: "json, name=processingDetails" })
  processingDetails?: VideoProcessingDetails;

  @SpeakeasyMetadata({ data: "json, name=projectDetails" })
  projectDetails?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=recordingDetails" })
  recordingDetails?: VideoRecordingDetails;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: VideoSnippet;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: VideoStatistics;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VideoStatus;

  @SpeakeasyMetadata({ data: "json, name=suggestions" })
  suggestions?: VideoSuggestions;

  @SpeakeasyMetadata({ data: "json, name=topicDetails" })
  topicDetails?: VideoTopicDetails;
}
