import axios from "axios";
import * as utils from "../internal/utils";
import { Atm } from "./atm";
import { Bca } from "./bca";
import { Branch } from "./branch";
import { Ccc } from "./ccc";
import { Pca } from "./pca";
import { Sme } from "./sme";
export var ServerList = [
    "https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3",
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
        this.atm = new Atm(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.bca = new Bca(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.branch = new Branch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ccc = new Ccc(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pca = new Pca(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sme = new Sme(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
