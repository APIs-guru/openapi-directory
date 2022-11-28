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
import { GoogleCloudConnectorsV1AuthConfig } from "./googlecloudconnectorsv1authconfig";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1DestinationConfig } from "./googlecloudconnectorsv1destinationconfig";
import { GoogleCloudConnectorsV1LockConfig } from "./googlecloudconnectorsv1lockconfig";
import { GoogleCloudConnectorsV1NodeConfig } from "./googlecloudconnectorsv1nodeconfig";
import { GoogleCloudConnectorsV1ConnectionStatus } from "./googlecloudconnectorsv1connectionstatus";
// GoogleCloudConnectorsV1Connection
/**
 * Connection represents an instance of connector.
**/
var GoogleCloudConnectorsV1Connection = /** @class */ (function (_super) {
    __extends(GoogleCloudConnectorsV1Connection, _super);
    function GoogleCloudConnectorsV1Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authConfig" }),
        __metadata("design:type", GoogleCloudConnectorsV1AuthConfig)
    ], GoogleCloudConnectorsV1Connection.prototype, "authConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configVariables", elemType: GoogleCloudConnectorsV1ConfigVariable }),
        __metadata("design:type", Array)
    ], GoogleCloudConnectorsV1Connection.prototype, "configVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "connectorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfigs", elemType: GoogleCloudConnectorsV1DestinationConfig }),
        __metadata("design:type", Array)
    ], GoogleCloudConnectorsV1Connection.prototype, "destinationConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=envoyImageLocation" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "envoyImageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLocation" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "imageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudConnectorsV1Connection.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockConfig" }),
        __metadata("design:type", GoogleCloudConnectorsV1LockConfig)
    ], GoogleCloudConnectorsV1Connection.prototype, "lockConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", GoogleCloudConnectorsV1NodeConfig)
    ], GoogleCloudConnectorsV1Connection.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDirectory" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "serviceDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GoogleCloudConnectorsV1ConnectionStatus)
    ], GoogleCloudConnectorsV1Connection.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudConnectorsV1Connection.prototype, "suspended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudConnectorsV1Connection.prototype, "updateTime", void 0);
    return GoogleCloudConnectorsV1Connection;
}(SpeakeasyBase));
export { GoogleCloudConnectorsV1Connection };
