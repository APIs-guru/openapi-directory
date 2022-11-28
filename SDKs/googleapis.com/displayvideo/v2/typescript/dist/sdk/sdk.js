import axios from "axios";
import * as utils from "../internal/utils";
import { Advertisers } from "./advertisers";
import { CombinedAudiences } from "./combinedaudiences";
import { CustomBiddingAlgorithms } from "./custombiddingalgorithms";
import { CustomLists } from "./customlists";
import { FirstAndThirdPartyAudiences } from "./firstandthirdpartyaudiences";
import { FloodlightGroups } from "./floodlightgroups";
import { GoogleAudiences } from "./googleaudiences";
import { GuaranteedOrders } from "./guaranteedorders";
import { InventorySourceGroups } from "./inventorysourcegroups";
import { InventorySources } from "./inventorysources";
import { Media } from "./media";
import { Partners } from "./partners";
import { Sdfdownloadtasks } from "./sdfdownloadtasks";
import { TargetingTypes } from "./targetingtypes";
import { Users } from "./users";
export var ServerList = [
    "https://displayvideo.googleapis.com/",
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
/* SDK Documentation: https://developers.google.com/display-video/*/
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
        this.advertisers = new Advertisers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.combinedAudiences = new CombinedAudiences(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.customBiddingAlgorithms = new CustomBiddingAlgorithms(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.customLists = new CustomLists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.firstAndThirdPartyAudiences = new FirstAndThirdPartyAudiences(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floodlightGroups = new FloodlightGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.googleAudiences = new GoogleAudiences(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.guaranteedOrders = new GuaranteedOrders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inventorySourceGroups = new InventorySourceGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inventorySources = new InventorySources(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.media = new Media(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.partners = new Partners(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sdfdownloadtasks = new Sdfdownloadtasks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.targetingTypes = new TargetingTypes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.users = new Users(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
