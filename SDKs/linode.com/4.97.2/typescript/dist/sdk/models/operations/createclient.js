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
var CreateClientRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateClientRequestBodyInput, _super);
    function CreateClientRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateClientRequestBodyInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], CreateClientRequestBodyInput.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_uri" }),
        __metadata("design:type", String)
    ], CreateClientRequestBodyInput.prototype, "redirectUri", void 0);
    return CreateClientRequestBodyInput;
}(SpeakeasyBase));
export { CreateClientRequestBodyInput };
var CreateClientSecurity = /** @class */ (function (_super) {
    __extends(CreateClientSecurity, _super);
    function CreateClientSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateClientSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateClientSecurity.prototype, "oauth", void 0);
    return CreateClientSecurity;
}(SpeakeasyBase));
export { CreateClientSecurity };
var CreateClientDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateClientDefaultApplicationJson, _super);
    function CreateClientDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateClientDefaultApplicationJson.prototype, "errors", void 0);
    return CreateClientDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateClientDefaultApplicationJson };
var CreateClientRequest = /** @class */ (function (_super) {
    __extends(CreateClientRequest, _super);
    function CreateClientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateClientRequestBodyInput)
    ], CreateClientRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateClientSecurity)
    ], CreateClientRequest.prototype, "security", void 0);
    return CreateClientRequest;
}(SpeakeasyBase));
export { CreateClientRequest };
var CreateClientResponse = /** @class */ (function (_super) {
    __extends(CreateClientResponse, _super);
    function CreateClientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateClientResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OAuthClient)
    ], CreateClientResponse.prototype, "oAuthClient", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateClientResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateClientDefaultApplicationJson)
    ], CreateClientResponse.prototype, "createClientDefaultApplicationJsonObject", void 0);
    return CreateClientResponse;
}(SpeakeasyBase));
export { CreateClientResponse };
