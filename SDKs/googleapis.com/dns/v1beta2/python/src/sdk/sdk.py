
__doc__ = """ SDK Documentation: https://cloud.google.com/dns/docs"""
import requests

from . import utils

from .changes import Changes
from .dnskeys import DNSKeys
from .managedzoneoperations import ManagedZoneOperations
from .managedzones import ManagedZones
from .policies import Policies
from .projects import Projects
from .resourcerecordsets import ResourceRecordSets
from .responsepolicies import ResponsePolicies
from .responsepolicyrules import ResponsePolicyRules


SERVERS = [
	"https://dns.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://cloud.google.com/dns/docs"""
    changes: Changes
    dns_keys: DNSKeys
    managed_zone_operations: ManagedZoneOperations
    managed_zones: ManagedZones
    policies: Policies
    projects: Projects
    resource_record_sets: ResourceRecordSets
    response_policies: ResponsePolicies
    response_policy_rules: ResponsePolicyRules

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
        
        self.changes = Changes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dns_keys = DNSKeys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.managed_zone_operations = ManagedZoneOperations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.managed_zones = ManagedZones(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.policies = Policies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.projects = Projects(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.resource_record_sets = ResourceRecordSets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.response_policies = ResponsePolicies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.response_policy_rules = ResponsePolicyRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    