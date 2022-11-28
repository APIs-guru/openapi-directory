
__doc__ = """ SDK Documentation: https://developers.google.com/shopping-content/v2/"""
import requests

from . import utils

from .accounts import Accounts
from .accountstatuses import Accountstatuses
from .accounttax import Accounttax
from .buyongoogleprograms import Buyongoogleprograms
from .collections import Collections
from .collectionstatuses import Collectionstatuses
from .csses import Csses
from .datafeeds import Datafeeds
from .datafeedstatuses import Datafeedstatuses
from .freelistingsprogram import Freelistingsprogram
from .liasettings import Liasettings
from .localinventory import Localinventory
from .orderinvoices import Orderinvoices
from .orderreports import Orderreports
from .orderreturns import Orderreturns
from .orders import Orders
from .ordertrackingsignals import Ordertrackingsignals
from .pos import Pos
from .productdeliverytime import Productdeliverytime
from .products import Products
from .productstatuses import Productstatuses
from .promotions import Promotions
from .pubsubnotificationsettings import Pubsubnotificationsettings
from .quotas import Quotas
from .regionalinventory import Regionalinventory
from .regions import Regions
from .reports import Reports
from .repricingrules import Repricingrules
from .returnaddress import Returnaddress
from .returnpolicy import Returnpolicy
from .returnpolicyonline import Returnpolicyonline
from .settlementreports import Settlementreports
from .settlementtransactions import Settlementtransactions
from .shippingsettings import Shippingsettings
from .shoppingadsprogram import Shoppingadsprogram


SERVERS = [
	"https://shoppingcontent.googleapis.com/content/v2.1",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/shopping-content/v2/"""
    accounts: Accounts
    accountstatuses: Accountstatuses
    accounttax: Accounttax
    buyongoogleprograms: Buyongoogleprograms
    collections: Collections
    collectionstatuses: Collectionstatuses
    csses: Csses
    datafeeds: Datafeeds
    datafeedstatuses: Datafeedstatuses
    freelistingsprogram: Freelistingsprogram
    liasettings: Liasettings
    localinventory: Localinventory
    orderinvoices: Orderinvoices
    orderreports: Orderreports
    orderreturns: Orderreturns
    orders: Orders
    ordertrackingsignals: Ordertrackingsignals
    pos: Pos
    productdeliverytime: Productdeliverytime
    products: Products
    productstatuses: Productstatuses
    promotions: Promotions
    pubsubnotificationsettings: Pubsubnotificationsettings
    quotas: Quotas
    regionalinventory: Regionalinventory
    regions: Regions
    reports: Reports
    repricingrules: Repricingrules
    returnaddress: Returnaddress
    returnpolicy: Returnpolicy
    returnpolicyonline: Returnpolicyonline
    settlementreports: Settlementreports
    settlementtransactions: Settlementtransactions
    shippingsettings: Shippingsettings
    shoppingadsprogram: Shoppingadsprogram

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
        
        self.buyongoogleprograms = Buyongoogleprograms(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.collections = Collections(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.collectionstatuses = Collectionstatuses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.csses = Csses(
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
        
        self.freelistingsprogram = Freelistingsprogram(
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
        
        self.localinventory = Localinventory(
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
        
        self.ordertrackingsignals = Ordertrackingsignals(
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
        
        self.productdeliverytime = Productdeliverytime(
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
        
        self.promotions = Promotions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pubsubnotificationsettings = Pubsubnotificationsettings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.quotas = Quotas(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.regionalinventory = Regionalinventory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.regions = Regions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.reports = Reports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.repricingrules = Repricingrules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.returnaddress = Returnaddress(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.returnpolicy = Returnpolicy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.returnpolicyonline = Returnpolicyonline(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.settlementreports = Settlementreports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.settlementtransactions = Settlementtransactions(
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
        
        self.shoppingadsprogram = Shoppingadsprogram(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    