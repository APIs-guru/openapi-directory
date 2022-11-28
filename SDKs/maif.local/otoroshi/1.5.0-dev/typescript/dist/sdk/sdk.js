import axios from "axios";
import * as utils from "../internal/utils";
import { Apikeys } from "./apikeys";
import { AuthConfig } from "./authconfig";
import { Certificates } from "./certificates";
import { Configuration } from "./configuration";
import { DataExporterConfigs } from "./dataexporterconfigs";
import { Environments } from "./environments";
import { Groups } from "./groups";
import { Health } from "./health";
import { Import } from "./import";
import { JwtVerifiers } from "./jwtverifiers";
import { Scripts } from "./scripts";
import { Services } from "./services";
import { Snowmonkey } from "./snowmonkey";
import { Stats } from "./stats";
import { Templates } from "./templates";
import { ValidationAuthorities } from "./validationauthorities";
export var ServerList = [
    "http://otoroshi-api.oto.tools/",
    "http://maif.local",
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
/* SDK Documentation: https://maif.github.io/otoroshi/ - Find out more about Otoroshi*/
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
        this.apikeys = new Apikeys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authConfig = new AuthConfig(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.certificates = new Certificates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.configuration = new Configuration(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dataExporterConfigs = new DataExporterConfigs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.environments = new Environments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groups = new Groups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.health = new Health(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.import = new Import(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.jwtVerifiers = new JwtVerifiers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.scripts = new Scripts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.services = new Services(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.snowmonkey = new Snowmonkey(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.stats = new Stats(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.templates = new Templates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.validationAuthorities = new ValidationAuthorities(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
