import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * A *video* resource represents a YouTube video.
**/
export declare class Video extends SpeakeasyBase {
    ageGating?: VideoAgeGating;
    contentDetails?: VideoContentDetails;
    etag?: string;
    fileDetails?: VideoFileDetails;
    id?: string;
    kind?: string;
    liveStreamingDetails?: VideoLiveStreamingDetails;
    localizations?: Map<string, VideoLocalization>;
    monetizationDetails?: VideoMonetizationDetails;
    player?: VideoPlayer;
    processingDetails?: VideoProcessingDetails;
    projectDetails?: Map<string, any>;
    recordingDetails?: VideoRecordingDetails;
    snippet?: VideoSnippet;
    statistics?: VideoStatistics;
    status?: VideoStatus;
    suggestions?: VideoSuggestions;
    topicDetails?: VideoTopicDetails;
}
