import axios from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";
import { AccountInformationServiceAis } from "./accountinformationserviceais";
import { CommonServices } from "./commonservices";
import { ConfirmationOfFundsServicePiis } from "./confirmationoffundsservicepiis";
import { PaymentInitiationServicePis } from "./paymentinitiationservicepis";
import { SigningBasketsServiceSbs } from "./signingbasketsservicesbs";
export var ServerList = [
    "https://api.dev.openbankingproject.ch",
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
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk._security = security;
    };
}
/* SDK Documentation: https://github.com/openbankingproject-ch/obp-apis - Full Documentation of NextGen Access to Account Interoperability Framework
 * (General Introduction Paper, Operational Rules, Implementation Guidelines)
 * */
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
            if (this._security) {
                this._securityClient = utils.CreateSecurityClient(this._defaultClient, this._security);
            }
            else {
                this._securityClient = this._defaultClient;
            }
        }
        this.accountInformationServiceAis = new AccountInformationServiceAis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.commonServices = new CommonServices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.confirmationOfFundsServicePiis = new ConfirmationOfFundsServicePiis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.paymentInitiationServicePis = new PaymentInitiationServicePis(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.signingBasketsServiceSbs = new SigningBasketsServiceSbs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
