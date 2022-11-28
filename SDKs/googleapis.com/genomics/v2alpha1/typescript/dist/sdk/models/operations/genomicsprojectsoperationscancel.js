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
var GenomicsProjectsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsCancelPathParams, _super);
    function GenomicsProjectsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelPathParams.prototype, "name", void 0);
    return GenomicsProjectsOperationsCancelPathParams;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsCancelPathParams };
var GenomicsProjectsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsCancelQueryParams, _super);
    function GenomicsProjectsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return GenomicsProjectsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsCancelQueryParams };
var GenomicsProjectsOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsCancelSecurityOption1, _super);
    function GenomicsProjectsOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsProjectsOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsProjectsOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return GenomicsProjectsOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsCancelSecurityOption1 };
var GenomicsProjectsOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsCancelSecurityOption2, _super);
    function GenomicsProjectsOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GenomicsProjectsOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GenomicsProjectsOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return GenomicsProjectsOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsCancelSecurityOption2 };
var GenomicsProjectsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsCancelSecurity, _super);
    function GenomicsProjectsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsProjectsOperationsCancelSecurityOption1)
    ], GenomicsProjectsOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GenomicsProjectsOperationsCancelSecurityOption2)
    ], GenomicsProjectsOperationsCancelSecurity.prototype, "option2", void 0);
    return GenomicsProjectsOperationsCancelSecurity;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsCancelSecurity };
var GenomicsProjectsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsCancelRequest, _super);
    function GenomicsProjectsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsOperationsCancelPathParams)
    ], GenomicsProjectsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsOperationsCancelQueryParams)
    ], GenomicsProjectsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], GenomicsProjectsOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GenomicsProjectsOperationsCancelSecurity)
    ], GenomicsProjectsOperationsCancelRequest.prototype, "security", void 0);
    return GenomicsProjectsOperationsCancelRequest;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsCancelRequest };
var GenomicsProjectsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(GenomicsProjectsOperationsCancelResponse, _super);
    function GenomicsProjectsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GenomicsProjectsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GenomicsProjectsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GenomicsProjectsOperationsCancelResponse.prototype, "statusCode", void 0);
    return GenomicsProjectsOperationsCancelResponse;
}(SpeakeasyBase));
export { GenomicsProjectsOperationsCancelResponse };
