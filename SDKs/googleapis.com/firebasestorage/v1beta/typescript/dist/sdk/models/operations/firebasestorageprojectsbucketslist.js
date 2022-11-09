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
var FirebasestorageProjectsBucketsListPathParams = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsListPathParams, _super);
    function FirebasestorageProjectsBucketsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListPathParams.prototype, "parent", void 0);
    return FirebasestorageProjectsBucketsListPathParams;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsListPathParams };
var FirebasestorageProjectsBucketsListQueryParams = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsListQueryParams, _super);
    function FirebasestorageProjectsBucketsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListQueryParams.prototype, "uploadProtocol", void 0);
    return FirebasestorageProjectsBucketsListQueryParams;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsListQueryParams };
var FirebasestorageProjectsBucketsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsListSecurityOption1, _super);
    function FirebasestorageProjectsBucketsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasestorageProjectsBucketsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasestorageProjectsBucketsListSecurityOption1.prototype, "oauth2c", void 0);
    return FirebasestorageProjectsBucketsListSecurityOption1;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsListSecurityOption1 };
var FirebasestorageProjectsBucketsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsListSecurityOption2, _super);
    function FirebasestorageProjectsBucketsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebasestorageProjectsBucketsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebasestorageProjectsBucketsListSecurityOption2.prototype, "oauth2c", void 0);
    return FirebasestorageProjectsBucketsListSecurityOption2;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsListSecurityOption2 };
var FirebasestorageProjectsBucketsListSecurity = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsListSecurity, _super);
    function FirebasestorageProjectsBucketsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasestorageProjectsBucketsListSecurityOption1)
    ], FirebasestorageProjectsBucketsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebasestorageProjectsBucketsListSecurityOption2)
    ], FirebasestorageProjectsBucketsListSecurity.prototype, "option2", void 0);
    return FirebasestorageProjectsBucketsListSecurity;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsListSecurity };
var FirebasestorageProjectsBucketsListRequest = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsListRequest, _super);
    function FirebasestorageProjectsBucketsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsListPathParams)
    ], FirebasestorageProjectsBucketsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsListQueryParams)
    ], FirebasestorageProjectsBucketsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebasestorageProjectsBucketsListSecurity)
    ], FirebasestorageProjectsBucketsListRequest.prototype, "security", void 0);
    return FirebasestorageProjectsBucketsListRequest;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsListRequest };
var FirebasestorageProjectsBucketsListResponse = /** @class */ (function (_super) {
    __extends(FirebasestorageProjectsBucketsListResponse, _super);
    function FirebasestorageProjectsBucketsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebasestorageProjectsBucketsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListBucketsResponse)
    ], FirebasestorageProjectsBucketsListResponse.prototype, "listBucketsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebasestorageProjectsBucketsListResponse.prototype, "statusCode", void 0);
    return FirebasestorageProjectsBucketsListResponse;
}(SpeakeasyBase));
export { FirebasestorageProjectsBucketsListResponse };
