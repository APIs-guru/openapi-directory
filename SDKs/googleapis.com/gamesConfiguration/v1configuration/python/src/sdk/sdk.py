
__doc__ = """ SDK Documentation: https://developers.google.com/games/"""
import requests

from . import utils

from .achievementconfigurations import AchievementConfigurations
from .imageconfigurations import ImageConfigurations
from .leaderboardconfigurations import LeaderboardConfigurations


SERVERS = [
	"https://gamesconfiguration.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/games/"""
    achievement_configurations: AchievementConfigurations
    image_configurations: ImageConfigurations
    leaderboard_configurations: LeaderboardConfigurations

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
        
        self.achievement_configurations = AchievementConfigurations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.image_configurations = ImageConfigurations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.leaderboard_configurations = LeaderboardConfigurations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    