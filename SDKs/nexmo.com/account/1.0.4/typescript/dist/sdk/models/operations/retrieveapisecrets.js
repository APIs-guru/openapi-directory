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
var RetrieveApiSecretsPathParams = /** @class */ (function (_super) {
    __extends(RetrieveApiSecretsPathParams, _super);
    function RetrieveApiSecretsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api_key" }),
        __metadata("design:type", String)
    ], RetrieveApiSecretsPathParams.prototype, "apiKey", void 0);
    return RetrieveApiSecretsPathParams;
}(SpeakeasyBase));
export { RetrieveApiSecretsPathParams };
var RetrieveApiSecretsSecurity = /** @class */ (function (_super) {
    __extends(RetrieveApiSecretsSecurity, _super);
    function RetrieveApiSecretsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], RetrieveApiSecretsSecurity.prototype, "basicAuth", void 0);
    return RetrieveApiSecretsSecurity;
}(SpeakeasyBase));
export { RetrieveApiSecretsSecurity };
var RetrieveApiSecretsRequest = /** @class */ (function (_super) {
    __extends(RetrieveApiSecretsRequest, _super);
    function RetrieveApiSecretsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveApiSecretsPathParams)
    ], RetrieveApiSecretsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveApiSecretsSecurity)
    ], RetrieveApiSecretsRequest.prototype, "security", void 0);
    return RetrieveApiSecretsRequest;
}(SpeakeasyBase));
export { RetrieveApiSecretsRequest };
var RetrieveApiSecretsResponse = /** @class */ (function (_super) {
    __extends(RetrieveApiSecretsResponse, _super);
    function RetrieveApiSecretsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveApiSecretsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorApiKeyNotFound)
    ], RetrieveApiSecretsResponse.prototype, "errorApiKeyNotFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveApiSecretsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrieveApiSecretsResponse.prototype, "retrieveApiSecrets200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], RetrieveApiSecretsResponse.prototype, "retrieveApiSecrets401ApplicationJsonAny", void 0);
    return RetrieveApiSecretsResponse;
}(SpeakeasyBase));
export { RetrieveApiSecretsResponse };
