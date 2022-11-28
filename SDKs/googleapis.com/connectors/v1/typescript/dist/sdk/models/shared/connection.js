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
import { AuthConfig } from "./authconfig";
import { ConfigVariable } from "./configvariable";
import { DestinationConfig } from "./destinationconfig";
import { LockConfig } from "./lockconfig";
import { NodeConfig } from "./nodeconfig";
import { ConnectionStatus } from "./connectionstatus";
// Connection
/**
 * Connection represents an instance of connector.
**/
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authConfig" }),
        __metadata("design:type", AuthConfig)
    ], Connection.prototype, "authConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configVariables", elemType: ConfigVariable }),
        __metadata("design:type", Array)
    ], Connection.prototype, "configVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorVersion" }),
        __metadata("design:type", String)
    ], Connection.prototype, "connectorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Connection.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Connection.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfigs", elemType: DestinationConfig }),
        __metadata("design:type", Array)
    ], Connection.prototype, "destinationConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=envoyImageLocation" }),
        __metadata("design:type", String)
    ], Connection.prototype, "envoyImageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLocation" }),
        __metadata("design:type", String)
    ], Connection.prototype, "imageLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Connection.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockConfig" }),
        __metadata("design:type", LockConfig)
    ], Connection.prototype, "lockConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Connection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], Connection.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Connection.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDirectory" }),
        __metadata("design:type", String)
    ], Connection.prototype, "serviceDirectory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ConnectionStatus)
    ], Connection.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], Connection.prototype, "suspended", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Connection.prototype, "updateTime", void 0);
    return Connection;
}(SpeakeasyBase));
export { Connection };
// ConnectionInput
/**
 * Connection represents an instance of connector.
**/
var ConnectionInput = /** @class */ (function (_super) {
    __extends(ConnectionInput, _super);
    function ConnectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authConfig" }),
        __metadata("design:type", AuthConfig)
    ], ConnectionInput.prototype, "authConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configVariables", elemType: ConfigVariable }),
        __metadata("design:type", Array)
    ], ConnectionInput.prototype, "configVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorVersion" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "connectorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationConfigs", elemType: DestinationConfig }),
        __metadata("design:type", Array)
    ], ConnectionInput.prototype, "destinationConfigs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectionInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockConfig" }),
        __metadata("design:type", LockConfig)
    ], ConnectionInput.prototype, "lockConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeConfig" }),
        __metadata("design:type", NodeConfig)
    ], ConnectionInput.prototype, "nodeConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", ConnectionStatus)
    ], ConnectionInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], ConnectionInput.prototype, "suspended", void 0);
    return ConnectionInput;
}(SpeakeasyBase));
export { ConnectionInput };
