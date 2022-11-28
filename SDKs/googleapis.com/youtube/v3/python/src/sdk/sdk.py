
__doc__ = """ SDK Documentation: https://developers.google.com/youtube/"""
import requests

from . import utils

from .abusereports import AbuseReports
from .activities import Activities
from .captions import Captions
from .channelbanners import ChannelBanners
from .channelsections import ChannelSections
from .channels import Channels
from .commentthreads import CommentThreads
from .comments import Comments
from .i18nlanguages import I18nLanguages
from .i18nregions import I18nRegions
from .livebroadcasts import LiveBroadcasts
from .livechatbans import LiveChatBans
from .livechatmessages import LiveChatMessages
from .livechatmoderators import LiveChatModerators
from .livestreams import LiveStreams
from .members import Members
from .membershipslevels import MembershipsLevels
from .playlistitems import PlaylistItems
from .playlists import Playlists
from .search import Search
from .subscriptions import Subscriptions
from .superchatevents import SuperChatEvents
from .tests import Tests
from .thirdpartylinks import ThirdPartyLinks
from .thumbnails import Thumbnails
from .videoabusereportreasons import VideoAbuseReportReasons
from .videocategories import VideoCategories
from .videos import Videos
from .watermarks import Watermarks
from .youtube import Youtube


SERVERS = [
	"https://youtube.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/youtube/"""
    abuse_reports: AbuseReports
    activities: Activities
    captions: Captions
    channel_banners: ChannelBanners
    channel_sections: ChannelSections
    channels: Channels
    comment_threads: CommentThreads
    comments: Comments
    i18n_languages: I18nLanguages
    i18n_regions: I18nRegions
    live_broadcasts: LiveBroadcasts
    live_chat_bans: LiveChatBans
    live_chat_messages: LiveChatMessages
    live_chat_moderators: LiveChatModerators
    live_streams: LiveStreams
    members: Members
    memberships_levels: MembershipsLevels
    playlist_items: PlaylistItems
    playlists: Playlists
    search: Search
    subscriptions: Subscriptions
    super_chat_events: SuperChatEvents
    tests: Tests
    third_party_links: ThirdPartyLinks
    thumbnails: Thumbnails
    video_abuse_report_reasons: VideoAbuseReportReasons
    video_categories: VideoCategories
    videos: Videos
    watermarks: Watermarks
    youtube: Youtube

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.abuse_reports = AbuseReports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.activities = Activities(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.captions = Captions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_banners = ChannelBanners(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_sections = ChannelSections(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels = Channels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.comment_threads = CommentThreads(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.comments = Comments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.i18n_languages = I18nLanguages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.i18n_regions = I18nRegions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.live_broadcasts = LiveBroadcasts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.live_chat_bans = LiveChatBans(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.live_chat_messages = LiveChatMessages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.live_chat_moderators = LiveChatModerators(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.live_streams = LiveStreams(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.members = Members(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.memberships_levels = MembershipsLevels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.playlist_items = PlaylistItems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.playlists = Playlists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.search = Search(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.subscriptions = Subscriptions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.super_chat_events = SuperChatEvents(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.tests = Tests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.third_party_links = ThirdPartyLinks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.thumbnails = Thumbnails(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.video_abuse_report_reasons = VideoAbuseReportReasons(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.video_categories = VideoCategories(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.videos = Videos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.watermarks = Watermarks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.youtube = Youtube(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    