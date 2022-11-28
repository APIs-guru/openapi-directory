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
export var NodeBalancerConfigAlgorithmEnum;
(function (NodeBalancerConfigAlgorithmEnum) {
    NodeBalancerConfigAlgorithmEnum["Roundrobin"] = "roundrobin";
    NodeBalancerConfigAlgorithmEnum["Leastconn"] = "leastconn";
    NodeBalancerConfigAlgorithmEnum["Source"] = "source";
})(NodeBalancerConfigAlgorithmEnum || (NodeBalancerConfigAlgorithmEnum = {}));
export var NodeBalancerConfigCheckEnum;
(function (NodeBalancerConfigCheckEnum) {
    NodeBalancerConfigCheckEnum["None"] = "none";
    NodeBalancerConfigCheckEnum["Connection"] = "connection";
    NodeBalancerConfigCheckEnum["Http"] = "http";
    NodeBalancerConfigCheckEnum["HttpBody"] = "http_body";
})(NodeBalancerConfigCheckEnum || (NodeBalancerConfigCheckEnum = {}));
export var NodeBalancerConfigCipherSuiteEnum;
(function (NodeBalancerConfigCipherSuiteEnum) {
    NodeBalancerConfigCipherSuiteEnum["Recommended"] = "recommended";
    NodeBalancerConfigCipherSuiteEnum["Legacy"] = "legacy";
})(NodeBalancerConfigCipherSuiteEnum || (NodeBalancerConfigCipherSuiteEnum = {}));
// NodeBalancerConfigNodesStatus
/**
 * A structure containing information about the health of the backends for this port.  This information is updated periodically as checks are performed against backends.
 *
**/
var NodeBalancerConfigNodesStatus = /** @class */ (function (_super) {
    __extends(NodeBalancerConfigNodesStatus, _super);
    function NodeBalancerConfigNodesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=down" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfigNodesStatus.prototype, "down", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=up" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfigNodesStatus.prototype, "up", void 0);
    return NodeBalancerConfigNodesStatus;
}(SpeakeasyBase));
export { NodeBalancerConfigNodesStatus };
export var NodeBalancerConfigProtocolEnum;
(function (NodeBalancerConfigProtocolEnum) {
    NodeBalancerConfigProtocolEnum["Http"] = "http";
    NodeBalancerConfigProtocolEnum["Https"] = "https";
    NodeBalancerConfigProtocolEnum["Tcp"] = "tcp";
})(NodeBalancerConfigProtocolEnum || (NodeBalancerConfigProtocolEnum = {}));
export var NodeBalancerConfigProxyProtocolEnum;
(function (NodeBalancerConfigProxyProtocolEnum) {
    NodeBalancerConfigProxyProtocolEnum["None"] = "none";
    NodeBalancerConfigProxyProtocolEnum["V1"] = "v1";
    NodeBalancerConfigProxyProtocolEnum["V2"] = "v2";
})(NodeBalancerConfigProxyProtocolEnum || (NodeBalancerConfigProxyProtocolEnum = {}));
export var NodeBalancerConfigStickinessEnum;
(function (NodeBalancerConfigStickinessEnum) {
    NodeBalancerConfigStickinessEnum["None"] = "none";
    NodeBalancerConfigStickinessEnum["Table"] = "table";
    NodeBalancerConfigStickinessEnum["HttpCookie"] = "http_cookie";
})(NodeBalancerConfigStickinessEnum || (NodeBalancerConfigStickinessEnum = {}));
// NodeBalancerConfig
/**
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
 *
 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
 *
**/
var NodeBalancerConfig = /** @class */ (function (_super) {
    __extends(NodeBalancerConfig, _super);
    function NodeBalancerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "check", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_attempts" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfig.prototype, "checkAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_body" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "checkBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_interval" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfig.prototype, "checkInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_passive" }),
        __metadata("design:type", Boolean)
    ], NodeBalancerConfig.prototype, "checkPassive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_path" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "checkPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_timeout" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfig.prototype, "checkTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cipher_suite" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "cipherSuite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodebalancer_id" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfig.prototype, "nodebalancerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes_status" }),
        __metadata("design:type", NodeBalancerConfigNodesStatus)
    ], NodeBalancerConfig.prototype, "nodesStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfig.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxy_protocol" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "proxyProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_cert" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "sslCert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_commonname" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "sslCommonname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_fingerprint" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "sslFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_key" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "sslKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stickiness" }),
        __metadata("design:type", String)
    ], NodeBalancerConfig.prototype, "stickiness", void 0);
    return NodeBalancerConfig;
}(SpeakeasyBase));
export { NodeBalancerConfig };
// NodeBalancerConfigInput
/**
 * A NodeBalancer config represents the configuration of this NodeBalancer on a single port.  For example, a NodeBalancer Config on port 80 would typically represent how this NodeBalancer response to HTTP requests.
 *
 * NodeBalancer configs have a list of backends, called "nodes," that they forward requests between based on their configuration.
 *
**/
var NodeBalancerConfigInput = /** @class */ (function (_super) {
    __extends(NodeBalancerConfigInput, _super);
    function NodeBalancerConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "check", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_attempts" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfigInput.prototype, "checkAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_body" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "checkBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_interval" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfigInput.prototype, "checkInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_passive" }),
        __metadata("design:type", Boolean)
    ], NodeBalancerConfigInput.prototype, "checkPassive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_path" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "checkPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=check_timeout" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfigInput.prototype, "checkTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cipher_suite" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "cipherSuite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], NodeBalancerConfigInput.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxy_protocol" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "proxyProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_cert" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "sslCert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_key" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "sslKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stickiness" }),
        __metadata("design:type", String)
    ], NodeBalancerConfigInput.prototype, "stickiness", void 0);
    return NodeBalancerConfigInput;
}(SpeakeasyBase));
export { NodeBalancerConfigInput };
