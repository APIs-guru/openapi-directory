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
var CloudsupportCasesCommentsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudsupportCasesCommentsCreatePathParams, _super);
    function CloudsupportCasesCommentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreatePathParams.prototype, "parent", void 0);
    return CloudsupportCasesCommentsCreatePathParams;
}(SpeakeasyBase));
export { CloudsupportCasesCommentsCreatePathParams };
var CloudsupportCasesCommentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudsupportCasesCommentsCreateQueryParams, _super);
    function CloudsupportCasesCommentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsupportCasesCommentsCreateQueryParams;
}(SpeakeasyBase));
export { CloudsupportCasesCommentsCreateQueryParams };
var CloudsupportCasesCommentsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudsupportCasesCommentsCreateSecurity, _super);
    function CloudsupportCasesCommentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsupportCasesCommentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsupportCasesCommentsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudsupportCasesCommentsCreateSecurity;
}(SpeakeasyBase));
export { CloudsupportCasesCommentsCreateSecurity };
var CloudsupportCasesCommentsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudsupportCasesCommentsCreateRequest, _super);
    function CloudsupportCasesCommentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportCasesCommentsCreatePathParams)
    ], CloudsupportCasesCommentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportCasesCommentsCreateQueryParams)
    ], CloudsupportCasesCommentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommentInput)
    ], CloudsupportCasesCommentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsupportCasesCommentsCreateSecurity)
    ], CloudsupportCasesCommentsCreateRequest.prototype, "security", void 0);
    return CloudsupportCasesCommentsCreateRequest;
}(SpeakeasyBase));
export { CloudsupportCasesCommentsCreateRequest };
var CloudsupportCasesCommentsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudsupportCasesCommentsCreateResponse, _super);
    function CloudsupportCasesCommentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], CloudsupportCasesCommentsCreateResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsupportCasesCommentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsupportCasesCommentsCreateResponse.prototype, "statusCode", void 0);
    return CloudsupportCasesCommentsCreateResponse;
}(SpeakeasyBase));
export { CloudsupportCasesCommentsCreateResponse };
