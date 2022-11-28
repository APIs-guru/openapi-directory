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
import { SslConfigInput } from "./sslconfig";
import { SslConfig } from "./sslconfig";
// MySqlConnectionProfileInput
/**
 * Specifies connection parameters required specifically for MySQL databases.
**/
var MySqlConnectionProfileInput = /** @class */ (function (_super) {
    __extends(MySqlConnectionProfileInput, _super);
    function MySqlConnectionProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudSqlId" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfileInput.prototype, "cloudSqlId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfileInput.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfileInput.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], MySqlConnectionProfileInput.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl" }),
        __metadata("design:type", SslConfigInput)
    ], MySqlConnectionProfileInput.prototype, "ssl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfileInput.prototype, "username", void 0);
    return MySqlConnectionProfileInput;
}(SpeakeasyBase));
export { MySqlConnectionProfileInput };
// MySqlConnectionProfile
/**
 * Specifies connection parameters required specifically for MySQL databases.
**/
var MySqlConnectionProfile = /** @class */ (function (_super) {
    __extends(MySqlConnectionProfile, _super);
    function MySqlConnectionProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudSqlId" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfile.prototype, "cloudSqlId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfile.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfile.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordSet" }),
        __metadata("design:type", Boolean)
    ], MySqlConnectionProfile.prototype, "passwordSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], MySqlConnectionProfile.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl" }),
        __metadata("design:type", SslConfig)
    ], MySqlConnectionProfile.prototype, "ssl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], MySqlConnectionProfile.prototype, "username", void 0);
    return MySqlConnectionProfile;
}(SpeakeasyBase));
export { MySqlConnectionProfile };
