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
var DeleteSshKeyPathParams = /** @class */ (function (_super) {
    __extends(DeleteSshKeyPathParams, _super);
    function DeleteSshKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sshKeyId" }),
        __metadata("design:type", Number)
    ], DeleteSshKeyPathParams.prototype, "sshKeyId", void 0);
    return DeleteSshKeyPathParams;
}(SpeakeasyBase));
export { DeleteSshKeyPathParams };
var DeleteSshKeySecurity = /** @class */ (function (_super) {
    __extends(DeleteSshKeySecurity, _super);
    function DeleteSshKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteSshKeySecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteSshKeySecurity.prototype, "oauth", void 0);
    return DeleteSshKeySecurity;
}(SpeakeasyBase));
export { DeleteSshKeySecurity };
var DeleteSshKeyDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSshKeyDefaultApplicationJson, _super);
    function DeleteSshKeyDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteSshKeyDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteSshKeyDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteSshKeyDefaultApplicationJson };
var DeleteSshKeyRequest = /** @class */ (function (_super) {
    __extends(DeleteSshKeyRequest, _super);
    function DeleteSshKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSshKeyPathParams)
    ], DeleteSshKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSshKeySecurity)
    ], DeleteSshKeyRequest.prototype, "security", void 0);
    return DeleteSshKeyRequest;
}(SpeakeasyBase));
export { DeleteSshKeyRequest };
var DeleteSshKeyResponse = /** @class */ (function (_super) {
    __extends(DeleteSshKeyResponse, _super);
    function DeleteSshKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSshKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSshKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteSshKeyResponse.prototype, "deleteSshKey200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSshKeyDefaultApplicationJson)
    ], DeleteSshKeyResponse.prototype, "deleteSshKeyDefaultApplicationJsonObject", void 0);
    return DeleteSshKeyResponse;
}(SpeakeasyBase));
export { DeleteSshKeyResponse };
