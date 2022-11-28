import axios from "axios";
import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Accountstatuses } from "./accountstatuses";
import { Accounttax } from "./accounttax";
import { Buyongoogleprograms } from "./buyongoogleprograms";
import { Collections } from "./collections";
import { Collectionstatuses } from "./collectionstatuses";
import { Csses } from "./csses";
import { Datafeeds } from "./datafeeds";
import { Datafeedstatuses } from "./datafeedstatuses";
import { Freelistingsprogram } from "./freelistingsprogram";
import { Liasettings } from "./liasettings";
import { Localinventory } from "./localinventory";
import { Orderinvoices } from "./orderinvoices";
import { Orderreports } from "./orderreports";
import { Orderreturns } from "./orderreturns";
import { Orders } from "./orders";
import { Ordertrackingsignals } from "./ordertrackingsignals";
import { Pos } from "./pos";
import { Productdeliverytime } from "./productdeliverytime";
import { Products } from "./products";
import { Productstatuses } from "./productstatuses";
import { Promotions } from "./promotions";
import { Pubsubnotificationsettings } from "./pubsubnotificationsettings";
import { Quotas } from "./quotas";
import { Regionalinventory } from "./regionalinventory";
import { Regions } from "./regions";
import { Reports } from "./reports";
import { Repricingrules } from "./repricingrules";
import { Returnaddress } from "./returnaddress";
import { Returnpolicy } from "./returnpolicy";
import { Returnpolicyonline } from "./returnpolicyonline";
import { Settlementreports } from "./settlementreports";
import { Settlementtransactions } from "./settlementtransactions";
import { Shippingsettings } from "./shippingsettings";
import { Shoppingadsprogram } from "./shoppingadsprogram";
export var ServerList = [
    "https://shoppingcontent.googleapis.com/content/v2.1",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
/* SDK Documentation: https://developers.google.com/shopping-content/v2/*/
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            this._securityClient = this._defaultClient;
        }
        this.accounts = new Accounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accountstatuses = new Accountstatuses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.accounttax = new Accounttax(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.buyongoogleprograms = new Buyongoogleprograms(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.collections = new Collections(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.collectionstatuses = new Collectionstatuses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.csses = new Csses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.datafeeds = new Datafeeds(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.datafeedstatuses = new Datafeedstatuses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.freelistingsprogram = new Freelistingsprogram(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.liasettings = new Liasettings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.localinventory = new Localinventory(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orderinvoices = new Orderinvoices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orderreports = new Orderreports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orderreturns = new Orderreturns(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orders = new Orders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ordertrackingsignals = new Ordertrackingsignals(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pos = new Pos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.productdeliverytime = new Productdeliverytime(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.products = new Products(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.productstatuses = new Productstatuses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.promotions = new Promotions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pubsubnotificationsettings = new Pubsubnotificationsettings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.quotas = new Quotas(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.regionalinventory = new Regionalinventory(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.regions = new Regions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.reports = new Reports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.repricingrules = new Repricingrules(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.returnaddress = new Returnaddress(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.returnpolicy = new Returnpolicy(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.returnpolicyonline = new Returnpolicyonline(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.settlementreports = new Settlementreports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.settlementtransactions = new Settlementtransactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.shippingsettings = new Shippingsettings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.shoppingadsprogram = new Shoppingadsprogram(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
