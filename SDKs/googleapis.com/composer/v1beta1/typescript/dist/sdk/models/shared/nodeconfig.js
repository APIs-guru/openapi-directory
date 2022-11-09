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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAllocationPolicy } from "./ipallocationpolicy";
// NodeConfig
/**
 * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
**/
var NodeConfig = /** @class */ (function (_super) {
    __extends(NodeConfig, _super);
    function NodeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=diskSizeGb" }),
        __metadata("design:type", Number)
    ], NodeConfig.prototype, "diskSizeGb", void 0);
    __decorate([
        Metadata({ data: "json, name=enableIpMasqAgent" }),
        __metadata("design:type", Boolean)
    ], NodeConfig.prototype, "enableIpMasqAgent", void 0);
    __decorate([
        Metadata({ data: "json, name=ipAllocationPolicy" }),
        __metadata("design:type", IpAllocationPolicy)
    ], NodeConfig.prototype, "ipAllocationPolicy", void 0);
    __decorate([
        Metadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "machineType", void 0);
    __decorate([
        Metadata({ data: "json, name=maxPodsPerNode" }),
        __metadata("design:type", Number)
    ], NodeConfig.prototype, "maxPodsPerNode", void 0);
    __decorate([
        Metadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "network", void 0);
    __decorate([
        Metadata({ data: "json, name=oauthScopes" }),
        __metadata("design:type", Array)
    ], NodeConfig.prototype, "oauthScopes", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "serviceAccount", void 0);
    __decorate([
        Metadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], NodeConfig.prototype, "subnetwork", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodeConfig.prototype, "tags", void 0);
    return NodeConfig;
}(SpeakeasyBase));
export { NodeConfig };
