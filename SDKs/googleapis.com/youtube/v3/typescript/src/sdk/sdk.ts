import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AbuseReports } from "./abusereports";
import { Activities } from "./activities";
import { Captions } from "./captions";
import { ChannelBanners } from "./channelbanners";
import { ChannelSections } from "./channelsections";
import { Channels } from "./channels";
import { CommentThreads } from "./commentthreads";
import { Comments } from "./comments";
import { I18nLanguages } from "./i18nlanguages";
import { I18nRegions } from "./i18nregions";
import { LiveBroadcasts } from "./livebroadcasts";
import { LiveChatBans } from "./livechatbans";
import { LiveChatMessages } from "./livechatmessages";
import { LiveChatModerators } from "./livechatmoderators";
import { LiveStreams } from "./livestreams";
import { Members } from "./members";
import { MembershipsLevels } from "./membershipslevels";
import { PlaylistItems } from "./playlistitems";
import { Playlists } from "./playlists";
import { Search } from "./search";
import { Subscriptions } from "./subscriptions";
import { SuperChatEvents } from "./superchatevents";
import { Tests } from "./tests";
import { ThirdPartyLinks } from "./thirdpartylinks";
import { Thumbnails } from "./thumbnails";
import { VideoAbuseReportReasons } from "./videoabusereportreasons";
import { VideoCategories } from "./videocategories";
import { Videos } from "./videos";
import { Watermarks } from "./watermarks";
import { Youtube } from "./youtube";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://youtube.googleapis.com/",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

/* SDK Documentation: https://developers.google.com/youtube/*/
export class SDK {
  public abuseReports: AbuseReports;
  public activities: Activities;
  public captions: Captions;
  public channelBanners: ChannelBanners;
  public channelSections: ChannelSections;
  public channels: Channels;
  public commentThreads: CommentThreads;
  public comments: Comments;
  public i18nLanguages: I18nLanguages;
  public i18nRegions: I18nRegions;
  public liveBroadcasts: LiveBroadcasts;
  public liveChatBans: LiveChatBans;
  public liveChatMessages: LiveChatMessages;
  public liveChatModerators: LiveChatModerators;
  public liveStreams: LiveStreams;
  public members: Members;
  public membershipsLevels: MembershipsLevels;
  public playlistItems: PlaylistItems;
  public playlists: Playlists;
  public search: Search;
  public subscriptions: Subscriptions;
  public superChatEvents: SuperChatEvents;
  public tests: Tests;
  public thirdPartyLinks: ThirdPartyLinks;
  public thumbnails: Thumbnails;
  public videoAbuseReportReasons: VideoAbuseReportReasons;
  public videoCategories: VideoCategories;
  public videos: Videos;
  public watermarks: Watermarks;
  public youtube: Youtube;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.abuseReports = new AbuseReports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.activities = new Activities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.captions = new Captions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelBanners = new ChannelBanners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelSections = new ChannelSections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channels = new Channels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commentThreads = new CommentThreads(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.comments = new Comments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.i18nLanguages = new I18nLanguages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.i18nRegions = new I18nRegions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.liveBroadcasts = new LiveBroadcasts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.liveChatBans = new LiveChatBans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.liveChatMessages = new LiveChatMessages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.liveChatModerators = new LiveChatModerators(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.liveStreams = new LiveStreams(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.members = new Members(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.membershipsLevels = new MembershipsLevels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.playlistItems = new PlaylistItems(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.playlists = new Playlists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptions = new Subscriptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.superChatEvents = new SuperChatEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.tests = new Tests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.thirdPartyLinks = new ThirdPartyLinks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.thumbnails = new Thumbnails(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.videoAbuseReportReasons = new VideoAbuseReportReasons(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.videoCategories = new VideoCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.videos = new Videos(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.watermarks = new Watermarks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.youtube = new Youtube(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
