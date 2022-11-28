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
var GenomicsProjectsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsListPathParams, _super);
    function GenomicsProjectsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListPathParams.prototype, "name", void 0);
    return GenomicsProjectsOperationsListPathParams;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsListPathParams };
var GenomicsProjectsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsListQueryParams, _super);
    function GenomicsProjectsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return GenomicsProjectsOperationsListQueryParams;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsListQueryParams };
var GenomicsProjectsOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsListSecurityOption1, _super);
    function GenomicsProjectsOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsProjectsOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsProjectsOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return GenomicsProjectsOperationsListSecurityOption1;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsListSecurityOption1 };
var GenomicsProjectsOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsListSecurityOption2, _super);
    function GenomicsProjectsOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsProjectsOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsProjectsOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return GenomicsProjectsOperationsListSecurityOption2;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsListSecurityOption2 };
var GenomicsProjectsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsListSecurity, _super);
    function GenomicsProjectsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsProjectsOperationsListSecurityOption1)
    ], GenomicsProjectsOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsProjectsOperationsListSecurityOption2)
    ], GenomicsProjectsOperationsListSecurity.prototype, "option2", void 0);
    return GenomicsProjectsOperationsListSecurity;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsListSecurity };
var GenomicsProjectsOperationsListRequest = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsListRequest, _super);
    function GenomicsProjectsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsOperationsListPathParams)
    ], GenomicsProjectsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsOperationsListQueryParams)
    ], GenomicsProjectsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsOperationsListSecurity)
    ], GenomicsProjectsOperationsListRequest.prototype, "security", void 0);
    return GenomicsProjectsOperationsListRequest;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsListRequest };
var GenomicsProjectsOperationsListResponse = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsListResponse, _super);
    function GenomicsProjectsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], GenomicsProjectsOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenomicsProjectsOperationsListResponse.prototype, "statusCode", void 0);
    return GenomicsProjectsOperationsListResponse;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsListResponse };
