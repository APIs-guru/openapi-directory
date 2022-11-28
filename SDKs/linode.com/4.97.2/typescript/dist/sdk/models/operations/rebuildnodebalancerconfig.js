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
import * as shared from "../shared";
var RebuildNodeBalancerConfigPathParams = /** @class */ (function (_super) {
    __extends(RebuildNodeBalancerConfigPathParams, _super);
    function RebuildNodeBalancerConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configId" }),
        __metadata("design:type", Number)
    ], RebuildNodeBalancerConfigPathParams.prototype, "configId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeBalancerId" }),
        __metadata("design:type", Number)
    ], RebuildNodeBalancerConfigPathParams.prototype, "nodeBalancerId", void 0);
    return RebuildNodeBalancerConfigPathParams;
}(SpeakeasyBase));
export { RebuildNodeBalancerConfigPathParams };
export var RebuildNodeBalancerConfigRequestBodyAlgorithmEnum;
(function (RebuildNodeBalancerConfigRequestBodyAlgorithmEnum) {
    RebuildNodeBalancerConfigRequestBodyAlgorithmEnum["Roundrobin"] = "roundrobin";
    RebuildNodeBalancerConfigRequestBodyAlgorithmEnum["Leastconn"] = "leastconn";
    RebuildNodeBalancerConfigRequestBodyAlgorithmEnum["Source"] = "source";
})(RebuildNodeBalancerConfigRequestBodyAlgorithmEnum || (RebuildNodeBalancerConfigRequestBodyAlgorithmEnum = {}));
export var RebuildNodeBalancerConfigRequestBodyCheckEnum;
(function (RebuildNodeBalancerConfigRequestBodyCheckEnum) {
    RebuildNodeBalancerConfigRequestBodyCheckEnum["None"] = "none";
    RebuildNodeBalancerConfigRequestBodyCheckEnum["Connection"] = "connection";
    RebuildNodeBalancerConfigRequestBodyCheckEnum["Http"] = "http";
    RebuildNodeBalancerConfigRequestBodyCheckEnum["HttpBody"] = "http_body";
})(RebuildNodeBalancerConfigRequestBodyCheckEnum || (RebuildNodeBalancerConfigRequestBodyCheckEnum = {}));
export var RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum;
(function (RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum) {
    RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum["Recommended"] = "recommended";
    RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum["Legacy"] = "legacy";
})(RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum || (RebuildNodeBalancerConfigRequestBodyCipherSuiteEnum = {}));
export var RebuildNodeBalancerConfigRequestBodyProtocolEnum;
(function (RebuildNodeBalancerConfigRequestBodyProtocolEnum) {
    RebuildNodeBalancerConfigRequestBodyProtocolEnum["Http"] = "http";
    RebuildNodeBalancerConfigRequestBodyProtocolEnum["Https"] = "https";
    RebuildNodeBalancerConfigRequestBodyProtocolEnum["Tcp"] = "tcp";
})(RebuildNodeBalancerConfigRequestBodyProtocolEnum || (RebuildNodeBalancerConfigRequestBodyProtocolEnum = {}));
export var RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum;
(function (RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum) {
    RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum["None"] = "none";
    RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum["V1"] = "v1";
    RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum["V2"] = "v2";
})(RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum || (RebuildNodeBalancerConfigRequestBodyProxyProtocolEnum = {}));
export var RebuildNodeBalancerConfigRequestBodyStickinessEnum;
(function (RebuildNodeBalancerConfigRequestBodyStickinessEnum) {
    RebuildNodeBalancerConfigRequestBodyStickinessEnum["None"] = "none";
    RebuildNodeBalancerConfigRequestBodyStickinessEnum["Table"] = "table";
    RebuildNodeBalancerConfigRequestBodyStickinessEnum["HttpCookie"] = "http_cookie";
})(RebuildNodeBalancerConfigRequestBodyStickinessEnum || (RebuildNodeBalancerConfigRequestBodyStickinessEnum = {}));
var RebuildNodeBalancerConfigRequestBodyInput = /** @class */ (function (_super) {
    __extends(RebuildNodeBalancerConfigRequestBodyInput, _super);
    function RebuildNodeBalancerConfigRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "check", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_attempts" }),
        __metadata("design:type", Number)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "checkAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_body" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "checkBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_interval" }),
        __metadata("design:type", Number)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "checkInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_passive" }),
        __metadata("design:type", Boolean)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "checkPassive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_path" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "checkPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_timeout" }),
        __metadata("design:type", Number)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "checkTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cipher_suite" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "cipherSuite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeBalancerNodeInput }),
        __metadata("design:type", Array)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "nodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxy_protocol" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "proxyProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_cert" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "sslCert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_key" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "sslKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stickiness" }),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigRequestBodyInput.prototype, "stickiness", void 0);
    return RebuildNodeBalancerConfigRequestBodyInput;
}(SpeakeasyBase));
export { RebuildNodeBalancerConfigRequestBodyInput };
var RebuildNodeBalancerConfigSecurity = /** @class */ (function (_super) {
    __extends(RebuildNodeBalancerConfigSecurity, _super);
    function RebuildNodeBalancerConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], RebuildNodeBalancerConfigSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], RebuildNodeBalancerConfigSecurity.prototype, "oauth", void 0);
    return RebuildNodeBalancerConfigSecurity;
}(SpeakeasyBase));
export { RebuildNodeBalancerConfigSecurity };
var RebuildNodeBalancerConfigDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(RebuildNodeBalancerConfigDefaultApplicationJson, _super);
    function RebuildNodeBalancerConfigDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], RebuildNodeBalancerConfigDefaultApplicationJson.prototype, "errors", void 0);
    return RebuildNodeBalancerConfigDefaultApplicationJson;
}(SpeakeasyBase));
export { RebuildNodeBalancerConfigDefaultApplicationJson };
var RebuildNodeBalancerConfigRequest = /** @class */ (function (_super) {
    __extends(RebuildNodeBalancerConfigRequest, _super);
    function RebuildNodeBalancerConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RebuildNodeBalancerConfigPathParams)
    ], RebuildNodeBalancerConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RebuildNodeBalancerConfigRequestBodyInput)
    ], RebuildNodeBalancerConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RebuildNodeBalancerConfigSecurity)
    ], RebuildNodeBalancerConfigRequest.prototype, "security", void 0);
    return RebuildNodeBalancerConfigRequest;
}(SpeakeasyBase));
export { RebuildNodeBalancerConfigRequest };
var RebuildNodeBalancerConfigResponse = /** @class */ (function (_super) {
    __extends(RebuildNodeBalancerConfigResponse, _super);
    function RebuildNodeBalancerConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RebuildNodeBalancerConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NodeBalancer)
    ], RebuildNodeBalancerConfigResponse.prototype, "nodeBalancer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RebuildNodeBalancerConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RebuildNodeBalancerConfigDefaultApplicationJson)
    ], RebuildNodeBalancerConfigResponse.prototype, "rebuildNodeBalancerConfigDefaultApplicationJsonObject", void 0);
    return RebuildNodeBalancerConfigResponse;
}(SpeakeasyBase));
export { RebuildNodeBalancerConfigResponse };
