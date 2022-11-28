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
var SecretsSecretsListQueryParams = /** @class */ (function (_super) {
    __extends(SecretsSecretsListQueryParams, _super);
    function SecretsSecretsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__in" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "idIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SecretsSecretsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], SecretsSecretsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role_id" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "roleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], SecretsSecretsListQueryParams.prototype, "tag", void 0);
    return SecretsSecretsListQueryParams;
}(SpeakeasyBase));
export { SecretsSecretsListQueryParams };
var SecretsSecretsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(SecretsSecretsList200ApplicationJson, _super);
    function SecretsSecretsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], SecretsSecretsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], SecretsSecretsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], SecretsSecretsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Secret }),
        __metadata("design:type", Array)
    ], SecretsSecretsList200ApplicationJson.prototype, "results", void 0);
    return SecretsSecretsList200ApplicationJson;
}(SpeakeasyBase));
export { SecretsSecretsList200ApplicationJson };
var SecretsSecretsListRequest = /** @class */ (function (_super) {
    __extends(SecretsSecretsListRequest, _super);
    function SecretsSecretsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretsSecretsListQueryParams)
    ], SecretsSecretsListRequest.prototype, "queryParams", void 0);
    return SecretsSecretsListRequest;
}(SpeakeasyBase));
export { SecretsSecretsListRequest };
var SecretsSecretsListResponse = /** @class */ (function (_super) {
    __extends(SecretsSecretsListResponse, _super);
    function SecretsSecretsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecretsSecretsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecretsSecretsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecretsSecretsList200ApplicationJson)
    ], SecretsSecretsListResponse.prototype, "secretsSecretsList200ApplicationJsonObject", void 0);
    return SecretsSecretsListResponse;
}(SpeakeasyBase));
export { SecretsSecretsListResponse };
