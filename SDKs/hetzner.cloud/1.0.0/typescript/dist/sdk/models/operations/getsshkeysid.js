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
var GetSshKeysIdPathParams = /** @class */ (function (_super) {
    __extends(GetSshKeysIdPathParams, _super);
    function GetSshKeysIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetSshKeysIdPathParams.prototype, "id", void 0);
    return GetSshKeysIdPathParams;
}(SpeakeasyBase));
export { GetSshKeysIdPathParams };
var GetSshKeysId200ApplicationJsonSshKey = /** @class */ (function (_super) {
    __extends(GetSshKeysId200ApplicationJsonSshKey, _super);
    function GetSshKeysId200ApplicationJsonSshKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetSshKeysId200ApplicationJsonSshKey.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], GetSshKeysId200ApplicationJsonSshKey.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetSshKeysId200ApplicationJsonSshKey.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetSshKeysId200ApplicationJsonSshKey.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetSshKeysId200ApplicationJsonSshKey.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], GetSshKeysId200ApplicationJsonSshKey.prototype, "publicKey", void 0);
    return GetSshKeysId200ApplicationJsonSshKey;
}(SpeakeasyBase));
export { GetSshKeysId200ApplicationJsonSshKey };
var GetSshKeysId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSshKeysId200ApplicationJson, _super);
    function GetSshKeysId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_key" }),
        __metadata("design:type", GetSshKeysId200ApplicationJsonSshKey)
    ], GetSshKeysId200ApplicationJson.prototype, "sshKey", void 0);
    return GetSshKeysId200ApplicationJson;
}(SpeakeasyBase));
export { GetSshKeysId200ApplicationJson };
var GetSshKeysIdRequest = /** @class */ (function (_super) {
    __extends(GetSshKeysIdRequest, _super);
    function GetSshKeysIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeysIdPathParams)
    ], GetSshKeysIdRequest.prototype, "pathParams", void 0);
    return GetSshKeysIdRequest;
}(SpeakeasyBase));
export { GetSshKeysIdRequest };
var GetSshKeysIdResponse = /** @class */ (function (_super) {
    __extends(GetSshKeysIdResponse, _super);
    function GetSshKeysIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSshKeysIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSshKeysId200ApplicationJson)
    ], GetSshKeysIdResponse.prototype, "getSshKeysId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSshKeysIdResponse.prototype, "statusCode", void 0);
    return GetSshKeysIdResponse;
}(SpeakeasyBase));
export { GetSshKeysIdResponse };
