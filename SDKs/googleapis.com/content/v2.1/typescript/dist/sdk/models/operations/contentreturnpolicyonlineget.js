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
var ContentReturnpolicyonlineGetPathParams = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineGetPathParams, _super);
    function ContentReturnpolicyonlineGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=returnPolicyId" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetPathParams.prototype, "returnPolicyId", void 0);
    return ContentReturnpolicyonlineGetPathParams;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineGetPathParams };
var ContentReturnpolicyonlineGetQueryParams = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineGetQueryParams, _super);
    function ContentReturnpolicyonlineGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetQueryParams.prototype, "uploadProtocol", void 0);
    return ContentReturnpolicyonlineGetQueryParams;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineGetQueryParams };
var ContentReturnpolicyonlineGetSecurity = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineGetSecurity, _super);
    function ContentReturnpolicyonlineGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentReturnpolicyonlineGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentReturnpolicyonlineGetSecurity.prototype, "oauth2c", void 0);
    return ContentReturnpolicyonlineGetSecurity;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineGetSecurity };
var ContentReturnpolicyonlineGetRequest = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineGetRequest, _super);
    function ContentReturnpolicyonlineGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentReturnpolicyonlineGetPathParams)
    ], ContentReturnpolicyonlineGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentReturnpolicyonlineGetQueryParams)
    ], ContentReturnpolicyonlineGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentReturnpolicyonlineGetSecurity)
    ], ContentReturnpolicyonlineGetRequest.prototype, "security", void 0);
    return ContentReturnpolicyonlineGetRequest;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineGetRequest };
var ContentReturnpolicyonlineGetResponse = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineGetResponse, _super);
    function ContentReturnpolicyonlineGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReturnPolicyOnline)
    ], ContentReturnpolicyonlineGetResponse.prototype, "returnPolicyOnline", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentReturnpolicyonlineGetResponse.prototype, "statusCode", void 0);
    return ContentReturnpolicyonlineGetResponse;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineGetResponse };
