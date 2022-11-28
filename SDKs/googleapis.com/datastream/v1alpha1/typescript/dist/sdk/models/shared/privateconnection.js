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
import { Error } from "./error";
import { VpcPeeringConfig } from "./vpcpeeringconfig";
export var PrivateConnectionStateEnum;
(function (PrivateConnectionStateEnum) {
    PrivateConnectionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    PrivateConnectionStateEnum["Creating"] = "CREATING";
    PrivateConnectionStateEnum["Created"] = "CREATED";
    PrivateConnectionStateEnum["Failed"] = "FAILED";
    PrivateConnectionStateEnum["Deleting"] = "DELETING";
    PrivateConnectionStateEnum["FailedToDelete"] = "FAILED_TO_DELETE";
})(PrivateConnectionStateEnum || (PrivateConnectionStateEnum = {}));
// PrivateConnectionInput
/**
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
var PrivateConnectionInput = /** @class */ (function (_super) {
    __extends(PrivateConnectionInput, _super);
    function PrivateConnectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PrivateConnectionInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Error)
    ], PrivateConnectionInput.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PrivateConnectionInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcPeeringConfig" }),
        __metadata("design:type", VpcPeeringConfig)
    ], PrivateConnectionInput.prototype, "vpcPeeringConfig", void 0);
    return PrivateConnectionInput;
}(SpeakeasyBase));
export { PrivateConnectionInput };
// PrivateConnection
/**
 * The PrivateConnection resource is used to establish private connectivity between Datastream and a customer's network.
**/
var PrivateConnection = /** @class */ (function (_super) {
    __extends(PrivateConnection, _super);
    function PrivateConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], PrivateConnection.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PrivateConnection.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Error)
    ], PrivateConnection.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PrivateConnection.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PrivateConnection.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], PrivateConnection.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], PrivateConnection.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcPeeringConfig" }),
        __metadata("design:type", VpcPeeringConfig)
    ], PrivateConnection.prototype, "vpcPeeringConfig", void 0);
    return PrivateConnection;
}(SpeakeasyBase));
export { PrivateConnection };
