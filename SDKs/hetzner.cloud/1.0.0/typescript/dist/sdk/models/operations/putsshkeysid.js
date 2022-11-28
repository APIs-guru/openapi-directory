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
var PutSshKeysIdPathParams = /** @class */ (function (_super) {
    __extends(PutSshKeysIdPathParams, _super);
    function PutSshKeysIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSshKeysIdPathParams.prototype, "id", void 0);
    return PutSshKeysIdPathParams;
}(SpeakeasyBase));
export { PutSshKeysIdPathParams };
var PutSshKeysIdRequestBody = /** @class */ (function (_super) {
    __extends(PutSshKeysIdRequestBody, _super);
    function PutSshKeysIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutSshKeysIdRequestBody.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutSshKeysIdRequestBody.prototype, "name", void 0);
    return PutSshKeysIdRequestBody;
}(SpeakeasyBase));
export { PutSshKeysIdRequestBody };
var PutSshKeysId200ApplicationJsonSshKey = /** @class */ (function (_super) {
    __extends(PutSshKeysId200ApplicationJsonSshKey, _super);
    function PutSshKeysId200ApplicationJsonSshKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutSshKeysId200ApplicationJsonSshKey.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], PutSshKeysId200ApplicationJsonSshKey.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutSshKeysId200ApplicationJsonSshKey.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutSshKeysId200ApplicationJsonSshKey.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutSshKeysId200ApplicationJsonSshKey.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], PutSshKeysId200ApplicationJsonSshKey.prototype, "publicKey", void 0);
    return PutSshKeysId200ApplicationJsonSshKey;
}(SpeakeasyBase));
export { PutSshKeysId200ApplicationJsonSshKey };
var PutSshKeysId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutSshKeysId200ApplicationJson, _super);
    function PutSshKeysId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_key" }),
        __metadata("design:type", PutSshKeysId200ApplicationJsonSshKey)
    ], PutSshKeysId200ApplicationJson.prototype, "sshKey", void 0);
    return PutSshKeysId200ApplicationJson;
}(SpeakeasyBase));
export { PutSshKeysId200ApplicationJson };
var PutSshKeysIdRequest = /** @class */ (function (_super) {
    __extends(PutSshKeysIdRequest, _super);
    function PutSshKeysIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSshKeysIdPathParams)
    ], PutSshKeysIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutSshKeysIdRequestBody)
    ], PutSshKeysIdRequest.prototype, "request", void 0);
    return PutSshKeysIdRequest;
}(SpeakeasyBase));
export { PutSshKeysIdRequest };
var PutSshKeysIdResponse = /** @class */ (function (_super) {
    __extends(PutSshKeysIdResponse, _super);
    function PutSshKeysIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSshKeysIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSshKeysId200ApplicationJson)
    ], PutSshKeysIdResponse.prototype, "putSshKeysId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSshKeysIdResponse.prototype, "statusCode", void 0);
    return PutSshKeysIdResponse;
}(SpeakeasyBase));
export { PutSshKeysIdResponse };
