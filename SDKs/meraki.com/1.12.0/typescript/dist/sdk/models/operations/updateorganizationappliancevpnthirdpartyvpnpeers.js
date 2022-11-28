var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams, _super);
    function UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams };
export var UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum;
(function (UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum) {
    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum["One"] = "1";
    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum["Two"] = "2";
})(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum || (UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum = {}));
export var UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum;
(function (UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum) {
    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum["Prfsha256"] = "prfsha256";
    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum["Prfsha1"] = "prfsha1";
    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum["Prfmd5"] = "prfmd5";
    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum["Default"] = "default";
})(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum || (UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = {}));
// UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies
/**
 * Custom IPSec policies for the VPN peer. If not included and a preset has not been chosen, the default preset for IPSec policies will be used.
**/
var UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies, _super);
    function UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childAuthAlgo" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "childAuthAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childCipherAlgo" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "childCipherAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childLifetime" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "childLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childPfsGroup" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "childPfsGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ikeAuthAlgo" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "ikeAuthAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ikeCipherAlgo" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "ikeCipherAlgo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ikeDiffieHellmanGroup" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "ikeDiffieHellmanGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ikeLifetime" }),
        __metadata("design:type", Number)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "ikeLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ikePrfAlgo" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies.prototype, "ikePrfAlgo", void 0);
    return UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies };
var UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers, _super);
    function UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ikeVersion" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "ikeVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipsecPolicies" }),
        __metadata("design:type", UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "ipsecPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipsecPoliciesPreset" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "ipsecPoliciesPreset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTags" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "networkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateSubnets" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "privateSubnets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicIp" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "remoteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers.prototype, "secret", void 0);
    return UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers };
var UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody, _super);
    function UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peers", elemType: UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody.prototype, "peers", void 0);
    return UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody };
var UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest, _super);
    function UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest.prototype, "request", void 0);
    return UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest };
var UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse, _super);
    function UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse.prototype, "updateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJsonObject", void 0);
    return UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse };
