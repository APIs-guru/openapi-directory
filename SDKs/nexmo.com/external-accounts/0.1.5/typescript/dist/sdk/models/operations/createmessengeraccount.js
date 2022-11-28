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
import * as shared from "../shared";
var CreateMessengerAccountRequestBody = /** @class */ (function (_super) {
    __extends(CreateMessengerAccountRequestBody, _super);
    function CreateMessengerAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access_token" }),
        __metadata("design:type", String)
    ], CreateMessengerAccountRequestBody.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applications" }),
        __metadata("design:type", Array)
    ], CreateMessengerAccountRequestBody.prototype, "applications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], CreateMessengerAccountRequestBody.prototype, "externalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateMessengerAccountRequestBody.prototype, "name", void 0);
    return CreateMessengerAccountRequestBody;
}(SpeakeasyBase));
export { CreateMessengerAccountRequestBody };
var CreateMessengerAccountSecurity = /** @class */ (function (_super) {
    __extends(CreateMessengerAccountSecurity, _super);
    function CreateMessengerAccountSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], CreateMessengerAccountSecurity.prototype, "bearerAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], CreateMessengerAccountSecurity.prototype, "basicAuth", void 0);
    return CreateMessengerAccountSecurity;
}(SpeakeasyBase));
export { CreateMessengerAccountSecurity };
var CreateMessengerAccount400ApplicationJsonInvalidParams = /** @class */ (function (_super) {
    __extends(CreateMessengerAccount400ApplicationJsonInvalidParams, _super);
    function CreateMessengerAccount400ApplicationJsonInvalidParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateMessengerAccount400ApplicationJsonInvalidParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], CreateMessengerAccount400ApplicationJsonInvalidParams.prototype, "reason", void 0);
    return CreateMessengerAccount400ApplicationJsonInvalidParams;
}(SpeakeasyBase));
export { CreateMessengerAccount400ApplicationJsonInvalidParams };
var CreateMessengerAccount400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateMessengerAccount400ApplicationJson, _super);
    function CreateMessengerAccount400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], CreateMessengerAccount400ApplicationJson.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], CreateMessengerAccount400ApplicationJson.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalid_params", elemType: CreateMessengerAccount400ApplicationJsonInvalidParams }),
        __metadata("design:type", Array)
    ], CreateMessengerAccount400ApplicationJson.prototype, "invalidParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreateMessengerAccount400ApplicationJson.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateMessengerAccount400ApplicationJson.prototype, "type", void 0);
    return CreateMessengerAccount400ApplicationJson;
}(SpeakeasyBase));
export { CreateMessengerAccount400ApplicationJson };
var CreateMessengerAccountRequest = /** @class */ (function (_super) {
    __extends(CreateMessengerAccountRequest, _super);
    function CreateMessengerAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateMessengerAccountRequestBody)
    ], CreateMessengerAccountRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMessengerAccountSecurity)
    ], CreateMessengerAccountRequest.prototype, "security", void 0);
    return CreateMessengerAccountRequest;
}(SpeakeasyBase));
export { CreateMessengerAccountRequest };
var CreateMessengerAccountResponse = /** @class */ (function (_super) {
    __extends(CreateMessengerAccountResponse, _super);
    function CreateMessengerAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundredAndOneResponse)
    ], CreateMessengerAccountResponse.prototype, "fourHundredAndOneResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FourHundredAndThreeResponse)
    ], CreateMessengerAccountResponse.prototype, "fourHundredAndThreeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateMessengerAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateMessengerAccount400ApplicationJson)
    ], CreateMessengerAccountResponse.prototype, "createMessengerAccount400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessengerAccountResponse)
    ], CreateMessengerAccountResponse.prototype, "messengerAccountResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateMessengerAccountResponse.prototype, "statusCode", void 0);
    return CreateMessengerAccountResponse;
}(SpeakeasyBase));
export { CreateMessengerAccountResponse };
