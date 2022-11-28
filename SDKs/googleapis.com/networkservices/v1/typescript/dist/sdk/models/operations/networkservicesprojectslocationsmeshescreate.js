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
var NetworkservicesProjectsLocationsMeshesCreatePathParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsMeshesCreatePathParams, _super);
    function NetworkservicesProjectsLocationsMeshesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreatePathParams.prototype, "parent", void 0);
    return NetworkservicesProjectsLocationsMeshesCreatePathParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsMeshesCreatePathParams };
var NetworkservicesProjectsLocationsMeshesCreateQueryParams = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsMeshesCreateQueryParams, _super);
    function NetworkservicesProjectsLocationsMeshesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=meshId" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "meshId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return NetworkservicesProjectsLocationsMeshesCreateQueryParams;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsMeshesCreateQueryParams };
var NetworkservicesProjectsLocationsMeshesCreateSecurity = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsMeshesCreateSecurity, _super);
    function NetworkservicesProjectsLocationsMeshesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworkservicesProjectsLocationsMeshesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworkservicesProjectsLocationsMeshesCreateSecurity.prototype, "oauth2c", void 0);
    return NetworkservicesProjectsLocationsMeshesCreateSecurity;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsMeshesCreateSecurity };
var NetworkservicesProjectsLocationsMeshesCreateRequest = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsMeshesCreateRequest, _super);
    function NetworkservicesProjectsLocationsMeshesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsMeshesCreatePathParams)
    ], NetworkservicesProjectsLocationsMeshesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsMeshesCreateQueryParams)
    ], NetworkservicesProjectsLocationsMeshesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MeshInput)
    ], NetworkservicesProjectsLocationsMeshesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NetworkservicesProjectsLocationsMeshesCreateSecurity)
    ], NetworkservicesProjectsLocationsMeshesCreateRequest.prototype, "security", void 0);
    return NetworkservicesProjectsLocationsMeshesCreateRequest;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsMeshesCreateRequest };
var NetworkservicesProjectsLocationsMeshesCreateResponse = /** @class */ (function (_super) {
    __extends(NetworkservicesProjectsLocationsMeshesCreateResponse, _super);
    function NetworkservicesProjectsLocationsMeshesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NetworkservicesProjectsLocationsMeshesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], NetworkservicesProjectsLocationsMeshesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NetworkservicesProjectsLocationsMeshesCreateResponse.prototype, "statusCode", void 0);
    return NetworkservicesProjectsLocationsMeshesCreateResponse;
}(SpeakeasyBase));
export { NetworkservicesProjectsLocationsMeshesCreateResponse };
