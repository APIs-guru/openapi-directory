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
var StorageDefaultObjectAccessControlsUpdatePathParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdatePathParams, _super);
    function StorageDefaultObjectAccessControlsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdatePathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entity" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdatePathParams.prototype, "entity", void 0);
    return StorageDefaultObjectAccessControlsUpdatePathParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdatePathParams };
var StorageDefaultObjectAccessControlsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateQueryParams, _super);
    function StorageDefaultObjectAccessControlsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateQueryParams.prototype, "userProject", void 0);
    return StorageDefaultObjectAccessControlsUpdateQueryParams;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateQueryParams };
var StorageDefaultObjectAccessControlsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateSecurityOption1, _super);
    function StorageDefaultObjectAccessControlsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsUpdateSecurityOption1;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateSecurityOption1 };
var StorageDefaultObjectAccessControlsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateSecurityOption2, _super);
    function StorageDefaultObjectAccessControlsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageDefaultObjectAccessControlsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageDefaultObjectAccessControlsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return StorageDefaultObjectAccessControlsUpdateSecurityOption2;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateSecurityOption2 };
var StorageDefaultObjectAccessControlsUpdateSecurity = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateSecurity, _super);
    function StorageDefaultObjectAccessControlsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdateSecurityOption1)
    ], StorageDefaultObjectAccessControlsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdateSecurityOption2)
    ], StorageDefaultObjectAccessControlsUpdateSecurity.prototype, "option2", void 0);
    return StorageDefaultObjectAccessControlsUpdateSecurity;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateSecurity };
var StorageDefaultObjectAccessControlsUpdateRequest = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateRequest, _super);
    function StorageDefaultObjectAccessControlsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdatePathParams)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdateQueryParams)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageDefaultObjectAccessControlsUpdateSecurity)
    ], StorageDefaultObjectAccessControlsUpdateRequest.prototype, "security", void 0);
    return StorageDefaultObjectAccessControlsUpdateRequest;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateRequest };
var StorageDefaultObjectAccessControlsUpdateResponse = /** @class */ (function (_super) {
    __extends(StorageDefaultObjectAccessControlsUpdateResponse, _super);
    function StorageDefaultObjectAccessControlsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageDefaultObjectAccessControlsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ObjectAccessControl)
    ], StorageDefaultObjectAccessControlsUpdateResponse.prototype, "objectAccessControl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageDefaultObjectAccessControlsUpdateResponse.prototype, "statusCode", void 0);
    return StorageDefaultObjectAccessControlsUpdateResponse;
}(SpeakeasyBase));
export { StorageDefaultObjectAccessControlsUpdateResponse };
