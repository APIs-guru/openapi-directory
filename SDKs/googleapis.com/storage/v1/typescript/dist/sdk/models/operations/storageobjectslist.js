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
var StorageObjectsListPathParams = /** @class */ (function (_super) {
    __extends(StorageObjectsListPathParams, _super);
    function StorageObjectsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" }),
        __metadata("design:type", String)
    ], StorageObjectsListPathParams.prototype, "bucket", void 0);
    return StorageObjectsListPathParams;
}(SpeakeasyBase));
export { StorageObjectsListPathParams };
export var StorageObjectsListProjectionEnum;
(function (StorageObjectsListProjectionEnum) {
    StorageObjectsListProjectionEnum["Full"] = "full";
    StorageObjectsListProjectionEnum["NoAcl"] = "noAcl";
})(StorageObjectsListProjectionEnum || (StorageObjectsListProjectionEnum = {}));
var StorageObjectsListQueryParams = /** @class */ (function (_super) {
    __extends(StorageObjectsListQueryParams, _super);
    function StorageObjectsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delimiter" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "delimiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endOffset" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "endOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTrailingDelimiter" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsListQueryParams.prototype, "includeTrailingDelimiter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], StorageObjectsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startOffset" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "startOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userProject" }),
        __metadata("design:type", String)
    ], StorageObjectsListQueryParams.prototype, "userProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versions" }),
        __metadata("design:type", Boolean)
    ], StorageObjectsListQueryParams.prototype, "versions", void 0);
    return StorageObjectsListQueryParams;
}(SpeakeasyBase));
export { StorageObjectsListQueryParams };
var StorageObjectsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(StorageObjectsListSecurityOption1, _super);
    function StorageObjectsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsListSecurityOption1.prototype, "oauth2c", void 0);
    return StorageObjectsListSecurityOption1;
}(SpeakeasyBase));
export { StorageObjectsListSecurityOption1 };
var StorageObjectsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(StorageObjectsListSecurityOption2, _super);
    function StorageObjectsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsListSecurityOption2.prototype, "oauth2c", void 0);
    return StorageObjectsListSecurityOption2;
}(SpeakeasyBase));
export { StorageObjectsListSecurityOption2 };
var StorageObjectsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(StorageObjectsListSecurityOption3, _super);
    function StorageObjectsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsListSecurityOption3.prototype, "oauth2c", void 0);
    return StorageObjectsListSecurityOption3;
}(SpeakeasyBase));
export { StorageObjectsListSecurityOption3 };
var StorageObjectsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(StorageObjectsListSecurityOption4, _super);
    function StorageObjectsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsListSecurityOption4.prototype, "oauth2c", void 0);
    return StorageObjectsListSecurityOption4;
}(SpeakeasyBase));
export { StorageObjectsListSecurityOption4 };
var StorageObjectsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(StorageObjectsListSecurityOption5, _super);
    function StorageObjectsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StorageObjectsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StorageObjectsListSecurityOption5.prototype, "oauth2c", void 0);
    return StorageObjectsListSecurityOption5;
}(SpeakeasyBase));
export { StorageObjectsListSecurityOption5 };
var StorageObjectsListSecurity = /** @class */ (function (_super) {
    __extends(StorageObjectsListSecurity, _super);
    function StorageObjectsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsListSecurityOption1)
    ], StorageObjectsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsListSecurityOption2)
    ], StorageObjectsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsListSecurityOption3)
    ], StorageObjectsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsListSecurityOption4)
    ], StorageObjectsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", StorageObjectsListSecurityOption5)
    ], StorageObjectsListSecurity.prototype, "option5", void 0);
    return StorageObjectsListSecurity;
}(SpeakeasyBase));
export { StorageObjectsListSecurity };
var StorageObjectsListRequest = /** @class */ (function (_super) {
    __extends(StorageObjectsListRequest, _super);
    function StorageObjectsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsListPathParams)
    ], StorageObjectsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsListQueryParams)
    ], StorageObjectsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageObjectsListSecurity)
    ], StorageObjectsListRequest.prototype, "security", void 0);
    return StorageObjectsListRequest;
}(SpeakeasyBase));
export { StorageObjectsListRequest };
var StorageObjectsListResponse = /** @class */ (function (_super) {
    __extends(StorageObjectsListResponse, _super);
    function StorageObjectsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageObjectsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Objects)
    ], StorageObjectsListResponse.prototype, "objects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageObjectsListResponse.prototype, "statusCode", void 0);
    return StorageObjectsListResponse;
}(SpeakeasyBase));
export { StorageObjectsListResponse };
