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
import { AppEngineVersionEndpoint } from "./appengineversionendpoint";
import { CloudFunctionEndpoint } from "./cloudfunctionendpoint";
import { CloudRunRevisionEndpoint } from "./cloudrunrevisionendpoint";
export var EndpointNetworkTypeEnum;
(function (EndpointNetworkTypeEnum) {
    EndpointNetworkTypeEnum["NetworkTypeUnspecified"] = "NETWORK_TYPE_UNSPECIFIED";
    EndpointNetworkTypeEnum["GcpNetwork"] = "GCP_NETWORK";
    EndpointNetworkTypeEnum["NonGcpNetwork"] = "NON_GCP_NETWORK";
})(EndpointNetworkTypeEnum || (EndpointNetworkTypeEnum = {}));
// Endpoint
/**
 * Source or destination of the Connectivity Test.
**/
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    function Endpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineVersion" }),
        __metadata("design:type", AppEngineVersionEndpoint)
    ], Endpoint.prototype, "appEngineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudFunction" }),
        __metadata("design:type", CloudFunctionEndpoint)
    ], Endpoint.prototype, "cloudFunction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudRunRevision" }),
        __metadata("design:type", CloudRunRevisionEndpoint)
    ], Endpoint.prototype, "cloudRunRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudSqlInstance" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "cloudSqlInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeMasterCluster" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "gkeMasterCluster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkType" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "networkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], Endpoint.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "projectId", void 0);
    return Endpoint;
}(SpeakeasyBase));
export { Endpoint };
