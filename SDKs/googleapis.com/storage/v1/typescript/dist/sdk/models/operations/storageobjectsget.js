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
var StorageObjectsGetPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsGetPathParams, _super);
    function StorageObjectsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsGetPathParams.prototype, "bucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object" }),
        __metadata("design:type", String)
    ], StorageObjectsGetPathParams.prototype, "object", void 0);
    return StorageObjectsGetPathParams;
}(SpeakeasyBase));
export { StorageObjectsGetPathParams };
export var StorageObjectsGetProjectionEnum;
(function (StorageObjectsGetProjectionEnum) {
    StorageObjectsGetProjectionEnum["Full"] = "full";
    StorageObjectsGetProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsGetProjectionEnum || (StorageObjectsGetProjectionEnum = {}));
var StorageObjectsGetQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsGetQueryParams, _super);
    function StorageObjectsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=generation" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "generation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "ifGenerationMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifGenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "ifGenerationNotMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "ifMetagenerationMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ifMetagenerationNotMatch" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "ifMetagenerationNotMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsGetQueryParams.prototype, "userProject", void 0);
    return StorageObjectsGetQueryParams;
}(SpeakeasyBase));
export { StorageObjectsGetQueryParams };
var StorageObjectsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetSecurityOption1, _super);
    function StorageObjectsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsGetSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsGetSecurityOption1 };
var StorageObjectsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetSecurityOption2, _super);
    function StorageObjectsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsGetSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsGetSecurityOption2 };
var StorageObjectsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetSecurityOption3, _super);
    function StorageObjectsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetSecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsGetSecurityOption3;
}(SpeakeasyBase));
export { StorageObjectsGetSecurityOption3 };
var StorageObjectsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetSecurityOption4, _super);
    function StorageObjectsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetSecurityOption4.prototype, "oauth2c", void 0);
    return StorageObjectsGetSecurityOption4;
}(SpeakeasyBase));
export { StorageObjectsGetSecurityOption4 };
var StorageObjectsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageObjectsGetSecurityOption5, _super);
    function StorageObjectsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsGetSecurityOption5.prototype, "oauth2c", void 0);
    return StorageObjectsGetSecurityOption5;
}(SpeakeasyBase));
export { StorageObjectsGetSecurityOption5 };
var StorageObjectsGetSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsGetSecurity, _super);
    function StorageObjectsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetSecurityOption1)
    ], StorageObjectsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetSecurityOption2)
    ], StorageObjectsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetSecurityOption3)
    ], StorageObjectsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetSecurityOption4)
    ], StorageObjectsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsGetSecurityOption5)
    ], StorageObjectsGetSecurity.prototype, "option5", void 0);
    return StorageObjectsGetSecurity;
}(SpeakeasyBase));
export { StorageObjectsGetSecurity };
var StorageObjectsGetRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsGetRequest, _super);
    function StorageObjectsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsGetPathParams)
    ], StorageObjectsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsGetQueryParams)
    ], StorageObjectsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsGetSecurity)
    ], StorageObjectsGetRequest.prototype, "security", void 0);
    return StorageObjectsGetRequest;
}(SpeakeasyBase));
export { StorageObjectsGetRequest };
var StorageObjectsGetResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsGetResponse, _super);
    function StorageObjectsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Object)
    ], StorageObjectsGetResponse.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectsGetResponse.prototype, "statusCode", void 0);
    return StorageObjectsGetResponse;
}(SpeakeasyBase));
export { StorageObjectsGetResponse };
