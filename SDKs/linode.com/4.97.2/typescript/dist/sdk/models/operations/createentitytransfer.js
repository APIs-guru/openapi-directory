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
var CreateEntityTransferRequestBody = /** @class */ (function (_super) {
    __extends(CreateEntityTransferRequestBody, _super);
    function CreateEntityTransferRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities" }),
        __metadata("design:type", shared.Entities)
    ], CreateEntityTransferRequestBody.prototype, "entities", void 0);
    return CreateEntityTransferRequestBody;
}(SpeakeasyBase));
export { CreateEntityTransferRequestBody };
var CreateEntityTransferSecurity = /** @class */ (function (_super) {
    __extends(CreateEntityTransferSecurity, _super);
    function CreateEntityTransferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateEntityTransferSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateEntityTransferSecurity.prototype, "oauth", void 0);
    return CreateEntityTransferSecurity;
}(SpeakeasyBase));
export { CreateEntityTransferSecurity };
var CreateEntityTransferDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateEntityTransferDefaultApplicationJson, _super);
    function CreateEntityTransferDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateEntityTransferDefaultApplicationJson.prototype, "errors", void 0);
    return CreateEntityTransferDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateEntityTransferDefaultApplicationJson };
var CreateEntityTransferRequest = /** @class */ (function (_super) {
    __extends(CreateEntityTransferRequest, _super);
    function CreateEntityTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEntityTransferRequestBody)
    ], CreateEntityTransferRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEntityTransferSecurity)
    ], CreateEntityTransferRequest.prototype, "security", void 0);
    return CreateEntityTransferRequest;
}(SpeakeasyBase));
export { CreateEntityTransferRequest };
var CreateEntityTransferResponse = /** @class */ (function (_super) {
    __extends(CreateEntityTransferResponse, _super);
    function CreateEntityTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEntityTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityTransfer)
    ], CreateEntityTransferResponse.prototype, "entityTransfer", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEntityTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEntityTransferDefaultApplicationJson)
    ], CreateEntityTransferResponse.prototype, "createEntityTransferDefaultApplicationJsonObject", void 0);
    return CreateEntityTransferResponse;
}(SpeakeasyBase));
export { CreateEntityTransferResponse };
