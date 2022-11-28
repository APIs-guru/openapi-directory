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
var DeleteServiceTransferPathParams = /** @class */ (function (_super) {
    __extends(DeleteServiceTransferPathParams, _super);
    function DeleteServiceTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], DeleteServiceTransferPathParams.prototype, "token", void 0);
    return DeleteServiceTransferPathParams;
}(SpeakeasyBase));
export { DeleteServiceTransferPathParams };
var DeleteServiceTransferSecurity = /** @class */ (function (_super) {
    __extends(DeleteServiceTransferSecurity, _super);
    function DeleteServiceTransferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteServiceTransferSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteServiceTransferSecurity.prototype, "oauth", void 0);
    return DeleteServiceTransferSecurity;
}(SpeakeasyBase));
export { DeleteServiceTransferSecurity };
var DeleteServiceTransferDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteServiceTransferDefaultApplicationJson, _super);
    function DeleteServiceTransferDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteServiceTransferDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteServiceTransferDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteServiceTransferDefaultApplicationJson };
var DeleteServiceTransferRequest = /** @class */ (function (_super) {
    __extends(DeleteServiceTransferRequest, _super);
    function DeleteServiceTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceTransferPathParams)
    ], DeleteServiceTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceTransferSecurity)
    ], DeleteServiceTransferRequest.prototype, "security", void 0);
    return DeleteServiceTransferRequest;
}(SpeakeasyBase));
export { DeleteServiceTransferRequest };
var DeleteServiceTransferResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceTransferResponse, _super);
    function DeleteServiceTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteServiceTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteServiceTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteServiceTransferResponse.prototype, "deleteServiceTransfer200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceTransferDefaultApplicationJson)
    ], DeleteServiceTransferResponse.prototype, "deleteServiceTransferDefaultApplicationJsonObject", void 0);
    return DeleteServiceTransferResponse;
}(SpeakeasyBase));
export { DeleteServiceTransferResponse };
