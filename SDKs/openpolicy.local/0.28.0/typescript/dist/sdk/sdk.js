import axios from "axios";
import * as utils from "../internal/utils";
import { CompileApi } from "./compileapi";
import { DataApi } from "./dataapi";
import { HealthApi } from "./healthapi";
import { PolicyApi } from "./policyapi";
import { QueryApi } from "./queryapi";
export var ServerList = [
    "http://openpolicy.local",
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
/* SDK Documentation: https://www.openpolicyagent.org/docs/latest/ - OPA documentation*/
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
        this.compileApi = new CompileApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dataApi = new DataApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.healthApi = new HealthApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.policyApi = new PolicyApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.queryApi = new QueryApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
