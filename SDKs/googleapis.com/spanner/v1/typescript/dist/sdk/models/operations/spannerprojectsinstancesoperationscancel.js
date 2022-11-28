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
var SpannerProjectsInstancesOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsCancelPathParams, _super);
    function SpannerProjectsInstancesOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelPathParams.prototype, "name", void 0);
    return SpannerProjectsInstancesOperationsCancelPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsCancelPathParams };
var SpannerProjectsInstancesOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsCancelQueryParams, _super);
    function SpannerProjectsInstancesOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesOperationsCancelQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsCancelQueryParams };
var SpannerProjectsInstancesOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsCancelSecurityOption1, _super);
    function SpannerProjectsInstancesOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsCancelSecurityOption1 };
var SpannerProjectsInstancesOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsCancelSecurityOption2, _super);
    function SpannerProjectsInstancesOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsCancelSecurityOption2 };
var SpannerProjectsInstancesOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsCancelSecurity, _super);
    function SpannerProjectsInstancesOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesOperationsCancelSecurityOption1)
    ], SpannerProjectsInstancesOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesOperationsCancelSecurityOption2)
    ], SpannerProjectsInstancesOperationsCancelSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesOperationsCancelSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsCancelSecurity };
var SpannerProjectsInstancesOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsCancelRequest, _super);
    function SpannerProjectsInstancesOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesOperationsCancelPathParams)
    ], SpannerProjectsInstancesOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesOperationsCancelQueryParams)
    ], SpannerProjectsInstancesOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesOperationsCancelSecurity)
    ], SpannerProjectsInstancesOperationsCancelRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesOperationsCancelRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsCancelRequest };
var SpannerProjectsInstancesOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesOperationsCancelResponse, _super);
    function SpannerProjectsInstancesOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SpannerProjectsInstancesOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesOperationsCancelResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesOperationsCancelResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesOperationsCancelResponse };
