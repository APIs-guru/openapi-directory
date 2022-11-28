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
var ContentReturnpolicyonlineDeletePathParams = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineDeletePathParams, _super);
    function ContentReturnpolicyonlineDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeletePathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=returnPolicyId" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeletePathParams.prototype, "returnPolicyId", void 0);
    return ContentReturnpolicyonlineDeletePathParams;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineDeletePathParams };
var ContentReturnpolicyonlineDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineDeleteQueryParams, _super);
    function ContentReturnpolicyonlineDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ContentReturnpolicyonlineDeleteQueryParams;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineDeleteQueryParams };
var ContentReturnpolicyonlineDeleteSecurity = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineDeleteSecurity, _super);
    function ContentReturnpolicyonlineDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentReturnpolicyonlineDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentReturnpolicyonlineDeleteSecurity.prototype, "oauth2c", void 0);
    return ContentReturnpolicyonlineDeleteSecurity;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineDeleteSecurity };
var ContentReturnpolicyonlineDeleteRequest = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineDeleteRequest, _super);
    function ContentReturnpolicyonlineDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentReturnpolicyonlineDeletePathParams)
    ], ContentReturnpolicyonlineDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentReturnpolicyonlineDeleteQueryParams)
    ], ContentReturnpolicyonlineDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentReturnpolicyonlineDeleteSecurity)
    ], ContentReturnpolicyonlineDeleteRequest.prototype, "security", void 0);
    return ContentReturnpolicyonlineDeleteRequest;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineDeleteRequest };
var ContentReturnpolicyonlineDeleteResponse = /** @class */ (function (_super) {
    __extends(ContentReturnpolicyonlineDeleteResponse, _super);
    function ContentReturnpolicyonlineDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentReturnpolicyonlineDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentReturnpolicyonlineDeleteResponse.prototype, "statusCode", void 0);
    return ContentReturnpolicyonlineDeleteResponse;
}(SpeakeasyBase));
export { ContentReturnpolicyonlineDeleteResponse };
