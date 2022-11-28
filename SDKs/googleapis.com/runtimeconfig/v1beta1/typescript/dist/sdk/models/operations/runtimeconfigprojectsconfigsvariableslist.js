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
var RuntimeconfigProjectsConfigsVariablesListPathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesListPathParams, _super);
    function RuntimeconfigProjectsConfigsVariablesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListPathParams.prototype, "parent", void 0);
    return RuntimeconfigProjectsConfigsVariablesListPathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesListPathParams };
var RuntimeconfigProjectsConfigsVariablesListQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesListQueryParams, _super);
    function RuntimeconfigProjectsConfigsVariablesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnValues" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "returnValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsVariablesListQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesListQueryParams };
var RuntimeconfigProjectsConfigsVariablesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesListSecurityOption1, _super);
    function RuntimeconfigProjectsConfigsVariablesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesListSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesListSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesListSecurityOption1 };
var RuntimeconfigProjectsConfigsVariablesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesListSecurityOption2, _super);
    function RuntimeconfigProjectsConfigsVariablesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesListSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesListSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesListSecurityOption2 };
var RuntimeconfigProjectsConfigsVariablesListSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesListSecurity, _super);
    function RuntimeconfigProjectsConfigsVariablesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesListSecurityOption1)
    ], RuntimeconfigProjectsConfigsVariablesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesListSecurityOption2)
    ], RuntimeconfigProjectsConfigsVariablesListSecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsVariablesListSecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesListSecurity };
var RuntimeconfigProjectsConfigsVariablesListRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesListRequest, _super);
    function RuntimeconfigProjectsConfigsVariablesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesListPathParams)
    ], RuntimeconfigProjectsConfigsVariablesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesListQueryParams)
    ], RuntimeconfigProjectsConfigsVariablesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesListSecurity)
    ], RuntimeconfigProjectsConfigsVariablesListRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsVariablesListRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesListRequest };
var RuntimeconfigProjectsConfigsVariablesListResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesListResponse, _super);
    function RuntimeconfigProjectsConfigsVariablesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVariablesResponse)
    ], RuntimeconfigProjectsConfigsVariablesListResponse.prototype, "listVariablesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsVariablesListResponse.prototype, "statusCode", void 0);
    return RuntimeconfigProjectsConfigsVariablesListResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesListResponse };
