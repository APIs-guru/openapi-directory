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
var StorageObjectsUpdatePathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsUpdatePathParams, _super);
    function StorageObjectsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdatePathParams.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdatePathParams.prototype, "object", void 0);
    return StorageObjectsUpdatePathParams;
}(SpeakeasyBase));
export { StorageObjectsUpdatePathParams };
export var StorageObjectsUpdateProjectionEnum;
(function (StorageObjectsUpdateProjectionEnum) {
    StorageObjectsUpdateProjectionEnum["Full"] = "full";
    StorageObjectsUpdateProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsUpdateProjectionEnum || (StorageObjectsUpdateProjectionEnum = {}));
var StorageObjectsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsUpdateQueryParams, _super);
    function StorageObjectsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "generation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "ifGenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "projection", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsUpdateQueryParams.prototype, "userIp", void 0);
    return StorageObjectsUpdateQueryParams;
}(SpeakeasyBase));
export { StorageObjectsUpdateQueryParams };
var StorageObjectsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsUpdateSecurityOption1, _super);
    function StorageObjectsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsUpdateSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsUpdateSecurityOption1 };
var StorageObjectsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsUpdateSecurityOption2, _super);
    function StorageObjectsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsUpdateSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsUpdateSecurityOption2 };
var StorageObjectsUpdateSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsUpdateSecurity, _super);
    function StorageObjectsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsUpdateSecurityOption1)
    ], StorageObjectsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsUpdateSecurityOption2)
    ], StorageObjectsUpdateSecurity.prototype, "option2", void 0);
    return StorageObjectsUpdateSecurity;
}(SpeakeasyBase));
export { StorageObjectsUpdateSecurity };
var StorageObjectsUpdateRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsUpdateRequest, _super);
    function StorageObjectsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsUpdatePathParams)
    ], StorageObjectsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsUpdateQueryParams)
    ], StorageObjectsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Object)
    ], StorageObjectsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageObjectsUpdateSecurity)
    ], StorageObjectsUpdateRequest.prototype, "security", void 0);
    return StorageObjectsUpdateRequest;
}(SpeakeasyBase));
export { StorageObjectsUpdateRequest };
var StorageObjectsUpdateResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsUpdateResponse, _super);
    function StorageObjectsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageObjectsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Object)
    ], StorageObjectsUpdateResponse.prototype, "object", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageObjectsUpdateResponse.prototype, "statusCode", void 0);
    return StorageObjectsUpdateResponse;
}(SpeakeasyBase));
export { StorageObjectsUpdateResponse };
