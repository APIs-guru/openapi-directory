
__doc__ = """ SDK Documentation: https://github.com/openbankingproject-ch/obp-apis - Full Documentation of NextGen Access to Account Interoperability Framework
(General Introduction Paper, Operational Rules, Implementation Guidelines)
"""
import requests
from sdk.models import shared
from . import utils

from .account_information_service_ais_ import AccountInformationServiceAis
from .common_services import CommonServices
from .confirmation_of_funds_service_piis_ import ConfirmationOfFundsServicePiis
from .payment_initiation_service_pis_ import PaymentInitiationServicePis
from .signing_baskets_service_sbs_ import SigningBasketsServiceSbs


SERVERS = [
	"https://api.dev.openbankingproject.ch",
]


class SDK:
    r"""SDK Documentation: https://github.com/openbankingproject-ch/obp-apis - Full Documentation of NextGen Access to Account Interoperability Framework
    (General Introduction Paper, Operational Rules, Implementation Guidelines)
    """
    account_information_service_ais_: AccountInformationServiceAis
    common_services: CommonServices
    confirmation_of_funds_service_piis_: ConfirmationOfFundsServicePiis
    payment_initiation_service_pis_: PaymentInitiationServicePis
    signing_baskets_service_sbs_: SigningBasketsServiceSbs

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.account_information_service_ais_ = AccountInformationServiceAis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.common_services = CommonServices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.confirmation_of_funds_service_piis_ = ConfirmationOfFundsServicePiis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_initiation_service_pis_ = PaymentInitiationServicePis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.signing_baskets_service_sbs_ = SigningBasketsServiceSbs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    