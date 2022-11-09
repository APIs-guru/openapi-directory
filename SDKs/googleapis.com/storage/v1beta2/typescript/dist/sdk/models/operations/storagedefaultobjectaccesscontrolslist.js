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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var StorageDefaultObjectAccessControlsListPathParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsListPathParams, _super);
    function StorageDefaultObjectAccessControlsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListPathParams.prototype, "bucket", void 0);
    return StorageDefaultObjectAccessControlsListPathParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsListPathParams };
var StorageDefaultObjectAccessControlsListQueryParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsListQueryParams, _super);
    function StorageDefaultObjectAccessControlsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListQueryParams.prototype, "userIp", void 0);
    return StorageDefaultObjectAccessControlsListQueryParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsListQueryParams };
var StorageDefaultObjectAccessControlsListSecurity = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsListSecurity, _super);
    function StorageDefaultObjectAccessControlsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsListSecurity.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsListSecurity;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsListSecurity };
var StorageDefaultObjectAccessControlsListRequest = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsListRequest, _super);
    function StorageDefaultObjectAccessControlsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsListPathParams)
    ], StorageDefaultObjectAccessControlsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsListQueryParams)
    ], StorageDefaultObjectAccessControlsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsListSecurity)
    ], StorageDefaultObjectAccessControlsListRequest.prototype, "security", void 0);
    return StorageDefaultObjectAccessControlsListRequest;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsListRequest };
var StorageDefaultObjectAccessControlsListResponse = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsListResponse, _super);
    function StorageDefaultObjectAccessControlsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ObjectAccessControls)
    ], StorageDefaultObjectAccessControlsListResponse.prototype, "objectAccessControls", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageDefaultObjectAccessControlsListResponse.prototype, "statusCode", void 0);
    return StorageDefaultObjectAccessControlsListResponse;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsListResponse };
