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
import { ForwardSshTunnelConnectivity } from "./forwardsshtunnelconnectivity";
import { GcsProfile } from "./gcsprofile";
import { MysqlProfile } from "./mysqlprofile";
import { OracleProfile } from "./oracleprofile";
import { PostgresqlProfile } from "./postgresqlprofile";
import { PrivateConnectivity } from "./privateconnectivity";
import { MysqlProfileInput } from "./mysqlprofile";
// ConnectionProfile
/**
 * A set of reusable connection configurations to be used as a source or destination for a stream.
**/
var ConnectionProfile = /** @class */ (function (_super) {
    __extends(ConnectionProfile, _super);
    function ConnectionProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryProfile" }),
        __metadata("design:type", Map)
    ], ConnectionProfile.prototype, "bigqueryProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forwardSshConnectivity" }),
        __metadata("design:type", ForwardSshTunnelConnectivity)
    ], ConnectionProfile.prototype, "forwardSshConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsProfile" }),
        __metadata("design:type", GcsProfile)
    ], ConnectionProfile.prototype, "gcsProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectionProfile.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysqlProfile" }),
        __metadata("design:type", MysqlProfile)
    ], ConnectionProfile.prototype, "mysqlProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oracleProfile" }),
        __metadata("design:type", OracleProfile)
    ], ConnectionProfile.prototype, "oracleProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postgresqlProfile" }),
        __metadata("design:type", PostgresqlProfile)
    ], ConnectionProfile.prototype, "postgresqlProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateConnectivity" }),
        __metadata("design:type", PrivateConnectivity)
    ], ConnectionProfile.prototype, "privateConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staticServiceIpConnectivity" }),
        __metadata("design:type", Map)
    ], ConnectionProfile.prototype, "staticServiceIpConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "updateTime", void 0);
    return ConnectionProfile;
}(SpeakeasyBase));
export { ConnectionProfile };
// ConnectionProfileInput
/**
 * A set of reusable connection configurations to be used as a source or destination for a stream.
**/
var ConnectionProfileInput = /** @class */ (function (_super) {
    __extends(ConnectionProfileInput, _super);
    function ConnectionProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryProfile" }),
        __metadata("design:type", Map)
    ], ConnectionProfileInput.prototype, "bigqueryProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forwardSshConnectivity" }),
        __metadata("design:type", ForwardSshTunnelConnectivity)
    ], ConnectionProfileInput.prototype, "forwardSshConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsProfile" }),
        __metadata("design:type", GcsProfile)
    ], ConnectionProfileInput.prototype, "gcsProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectionProfileInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysqlProfile" }),
        __metadata("design:type", MysqlProfileInput)
    ], ConnectionProfileInput.prototype, "mysqlProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oracleProfile" }),
        __metadata("design:type", OracleProfile)
    ], ConnectionProfileInput.prototype, "oracleProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postgresqlProfile" }),
        __metadata("design:type", PostgresqlProfile)
    ], ConnectionProfileInput.prototype, "postgresqlProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateConnectivity" }),
        __metadata("design:type", PrivateConnectivity)
    ], ConnectionProfileInput.prototype, "privateConnectivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=staticServiceIpConnectivity" }),
        __metadata("design:type", Map)
    ], ConnectionProfileInput.prototype, "staticServiceIpConnectivity", void 0);
    return ConnectionProfileInput;
}(SpeakeasyBase));
export { ConnectionProfileInput };
