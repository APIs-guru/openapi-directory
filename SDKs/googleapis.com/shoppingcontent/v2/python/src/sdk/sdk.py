
__doc__ = """ SDK Documentation: https://developers.google.com/shopping-content/v2/"""
import requests

from . import utils

from .accounts import Accounts
from .accountstatuses import Accountstatuses
from .accounttax import Accounttax
from .datafeeds import Datafeeds
from .datafeedstatuses import Datafeedstatuses
from .liasettings import Liasettings
from .orderinvoices import Orderinvoices
from .orderreports import Orderreports
from .orderreturns import Orderreturns
from .orders import Orders
from .pos import Pos
from .products import Products
from .productstatuses import Productstatuses
from .shippingsettings import Shippingsettings


SERVERS = [
	"https://shoppingcontent.googleapis.com/content/v2",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/shopping-content/v2/"""
    accounts: Accounts
    accountstatuses: Accountstatuses
    accounttax: Accounttax
    datafeeds: Datafeeds
    datafeedstatuses: Datafeedstatuses
    liasettings: Liasettings
    orderinvoices: Orderinvoices
    orderreports: Orderreports
    orderreturns: Orderreturns
    orders: Orders
    pos: Pos
    products: Products
    productstatuses: Productstatuses
    shippingsettings: Shippingsettings

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
        
        self.accounts = Accounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.accountstatuses = Accountstatuses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.accounttax = Accounttax(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.datafeeds = Datafeeds(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.datafeedstatuses = Datafeedstatuses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.liasettings = Liasettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.orderinvoices = Orderinvoices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.orderreports = Orderreports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.orderreturns = Orderreturns(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.orders = Orders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pos = Pos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.products = Products(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.productstatuses = Productstatuses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.shippingsettings = Shippingsettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    