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
var CreateCreditCardSecurity = /** @class */ (function (_super) {
    __extends(CreateCreditCardSecurity, _super);
    function CreateCreditCardSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateCreditCardSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateCreditCardSecurity.prototype, "oauth", void 0);
    return CreateCreditCardSecurity;
}(SpeakeasyBase));
export { CreateCreditCardSecurity };
var CreateCreditCardDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCreditCardDefaultApplicationJson, _super);
    function CreateCreditCardDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateCreditCardDefaultApplicationJson.prototype, "errors", void 0);
    return CreateCreditCardDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateCreditCardDefaultApplicationJson };
var CreateCreditCardRequest = /** @class */ (function (_super) {
    __extends(CreateCreditCardRequest, _super);
    function CreateCreditCardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreditCard)
    ], CreateCreditCardRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCreditCardSecurity)
    ], CreateCreditCardRequest.prototype, "security", void 0);
    return CreateCreditCardRequest;
}(SpeakeasyBase));
export { CreateCreditCardRequest };
var CreateCreditCardResponse = /** @class */ (function (_super) {
    __extends(CreateCreditCardResponse, _super);
    function CreateCreditCardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCreditCardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCreditCardResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateCreditCardResponse.prototype, "createCreditCard200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCreditCardDefaultApplicationJson)
    ], CreateCreditCardResponse.prototype, "createCreditCardDefaultApplicationJsonObject", void 0);
    return CreateCreditCardResponse;
}(SpeakeasyBase));
export { CreateCreditCardResponse };
