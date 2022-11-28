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
var ChromepolicyCustomersPolicySchemasListPathParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPolicySchemasListPathParams, _super);
    function ChromepolicyCustomersPolicySchemasListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListPathParams.prototype, "parent", void 0);
    return ChromepolicyCustomersPolicySchemasListPathParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPolicySchemasListPathParams };
var ChromepolicyCustomersPolicySchemasListQueryParams = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPolicySchemasListQueryParams, _super);
    function ChromepolicyCustomersPolicySchemasListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListQueryParams.prototype, "uploadProtocol", void 0);
    return ChromepolicyCustomersPolicySchemasListQueryParams;
}(SpeakeasyBase));
export { ChromepolicyCustomersPolicySchemasListQueryParams };
var ChromepolicyCustomersPolicySchemasListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPolicySchemasListSecurityOption1, _super);
    function ChromepolicyCustomersPolicySchemasListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPolicySchemasListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPolicySchemasListSecurityOption1.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPolicySchemasListSecurityOption1;
}(SpeakeasyBase));
export { ChromepolicyCustomersPolicySchemasListSecurityOption1 };
var ChromepolicyCustomersPolicySchemasListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPolicySchemasListSecurityOption2, _super);
    function ChromepolicyCustomersPolicySchemasListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromepolicyCustomersPolicySchemasListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromepolicyCustomersPolicySchemasListSecurityOption2.prototype, "oauth2c", void 0);
    return ChromepolicyCustomersPolicySchemasListSecurityOption2;
}(SpeakeasyBase));
export { ChromepolicyCustomersPolicySchemasListSecurityOption2 };
var ChromepolicyCustomersPolicySchemasListSecurity = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPolicySchemasListSecurity, _super);
    function ChromepolicyCustomersPolicySchemasListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChromepolicyCustomersPolicySchemasListSecurityOption1)
    ], ChromepolicyCustomersPolicySchemasListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChromepolicyCustomersPolicySchemasListSecurityOption2)
    ], ChromepolicyCustomersPolicySchemasListSecurity.prototype, "option2", void 0);
    return ChromepolicyCustomersPolicySchemasListSecurity;
}(SpeakeasyBase));
export { ChromepolicyCustomersPolicySchemasListSecurity };
var ChromepolicyCustomersPolicySchemasListRequest = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPolicySchemasListRequest, _super);
    function ChromepolicyCustomersPolicySchemasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPolicySchemasListPathParams)
    ], ChromepolicyCustomersPolicySchemasListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPolicySchemasListQueryParams)
    ], ChromepolicyCustomersPolicySchemasListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromepolicyCustomersPolicySchemasListSecurity)
    ], ChromepolicyCustomersPolicySchemasListRequest.prototype, "security", void 0);
    return ChromepolicyCustomersPolicySchemasListRequest;
}(SpeakeasyBase));
export { ChromepolicyCustomersPolicySchemasListRequest };
var ChromepolicyCustomersPolicySchemasListResponse = /** @class */ (function (_super) {
    __extends(ChromepolicyCustomersPolicySchemasListResponse, _super);
    function ChromepolicyCustomersPolicySchemasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromepolicyCustomersPolicySchemasListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromePolicyVersionsV1ListPolicySchemasResponse)
    ], ChromepolicyCustomersPolicySchemasListResponse.prototype, "googleChromePolicyVersionsV1ListPolicySchemasResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromepolicyCustomersPolicySchemasListResponse.prototype, "statusCode", void 0);
    return ChromepolicyCustomersPolicySchemasListResponse;
}(SpeakeasyBase));
export { ChromepolicyCustomersPolicySchemasListResponse };
