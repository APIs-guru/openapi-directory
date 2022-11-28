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
export var GetAuthinfo200ApplicationJsonAuthMethodEnum;
(function (GetAuthinfo200ApplicationJsonAuthMethodEnum) {
    GetAuthinfo200ApplicationJsonAuthMethodEnum["UserSession"] = "user_session";
    GetAuthinfo200ApplicationJsonAuthMethodEnum["Internal"] = "internal";
    GetAuthinfo200ApplicationJsonAuthMethodEnum["StaticApiKey"] = "static_api_key";
})(GetAuthinfo200ApplicationJsonAuthMethodEnum || (GetAuthinfo200ApplicationJsonAuthMethodEnum = {}));
var GetAuthinfo200ApplicationJsonPermissions = /** @class */ (function (_super) {
    __extends(GetAuthinfo200ApplicationJsonPermissions, _super);
    function GetAuthinfo200ApplicationJsonPermissions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mutate" }),
        __metadata("design:type", Boolean)
    ], GetAuthinfo200ApplicationJsonPermissions.prototype, "mutate", void 0);
    return GetAuthinfo200ApplicationJsonPermissions;
}(SpeakeasyBase));
export { GetAuthinfo200ApplicationJsonPermissions };
var GetAuthinfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAuthinfo200ApplicationJson, _super);
    function GetAuthinfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_key_id" }),
        __metadata("design:type", String)
    ], GetAuthinfo200ApplicationJson.prototype, "apiKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_method" }),
        __metadata("design:type", String)
    ], GetAuthinfo200ApplicationJson.prototype, "authMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticated" }),
        __metadata("design:type", Boolean)
    ], GetAuthinfo200ApplicationJson.prototype, "authenticated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", GetAuthinfo200ApplicationJsonPermissions)
    ], GetAuthinfo200ApplicationJson.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetAuthinfo200ApplicationJson.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], GetAuthinfo200ApplicationJson.prototype, "userId", void 0);
    return GetAuthinfo200ApplicationJson;
}(SpeakeasyBase));
export { GetAuthinfo200ApplicationJson };
var GetAuthinfoResponse = /** @class */ (function (_super) {
    __extends(GetAuthinfoResponse, _super);
    function GetAuthinfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAuthinfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAuthinfoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAuthinfo200ApplicationJson)
    ], GetAuthinfoResponse.prototype, "getAuthinfo200ApplicationJsonObject", void 0);
    return GetAuthinfoResponse;
}(SpeakeasyBase));
export { GetAuthinfoResponse };
