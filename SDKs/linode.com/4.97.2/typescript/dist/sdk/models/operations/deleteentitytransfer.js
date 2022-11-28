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
var DeleteEntityTransferPathParams = /** @class */ (function (_super) {
    __extends(DeleteEntityTransferPathParams, _super);
    function DeleteEntityTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], DeleteEntityTransferPathParams.prototype, "token", void 0);
    return DeleteEntityTransferPathParams;
}(SpeakeasyBase));
export { DeleteEntityTransferPathParams };
var DeleteEntityTransferSecurity = /** @class */ (function (_super) {
    __extends(DeleteEntityTransferSecurity, _super);
    function DeleteEntityTransferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteEntityTransferSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteEntityTransferSecurity.prototype, "oauth", void 0);
    return DeleteEntityTransferSecurity;
}(SpeakeasyBase));
export { DeleteEntityTransferSecurity };
var DeleteEntityTransferDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteEntityTransferDefaultApplicationJson, _super);
    function DeleteEntityTransferDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteEntityTransferDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteEntityTransferDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteEntityTransferDefaultApplicationJson };
var DeleteEntityTransferRequest = /** @class */ (function (_super) {
    __extends(DeleteEntityTransferRequest, _super);
    function DeleteEntityTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteEntityTransferPathParams)
    ], DeleteEntityTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteEntityTransferSecurity)
    ], DeleteEntityTransferRequest.prototype, "security", void 0);
    return DeleteEntityTransferRequest;
}(SpeakeasyBase));
export { DeleteEntityTransferRequest };
var DeleteEntityTransferResponse = /** @class */ (function (_super) {
    __extends(DeleteEntityTransferResponse, _super);
    function DeleteEntityTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteEntityTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteEntityTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteEntityTransferResponse.prototype, "deleteEntityTransfer200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteEntityTransferDefaultApplicationJson)
    ], DeleteEntityTransferResponse.prototype, "deleteEntityTransferDefaultApplicationJsonObject", void 0);
    return DeleteEntityTransferResponse;
}(SpeakeasyBase));
export { DeleteEntityTransferResponse };
