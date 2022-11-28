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
var DatastoreProjectsBeginTransactionPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsBeginTransactionPathParams, _super);
    function DatastoreProjectsBeginTransactionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsBeginTransactionPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsBeginTransactionPathParams };
var DatastoreProjectsBeginTransactionQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsBeginTransactionQueryParams, _super);
    function DatastoreProjectsBeginTransactionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsBeginTransactionQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsBeginTransactionQueryParams };
var DatastoreProjectsBeginTransactionSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsBeginTransactionSecurityOption1, _super);
    function DatastoreProjectsBeginTransactionSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsBeginTransactionSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsBeginTransactionSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsBeginTransactionSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsBeginTransactionSecurityOption1 };
var DatastoreProjectsBeginTransactionSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsBeginTransactionSecurityOption2, _super);
    function DatastoreProjectsBeginTransactionSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsBeginTransactionSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsBeginTransactionSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsBeginTransactionSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsBeginTransactionSecurityOption2 };
var DatastoreProjectsBeginTransactionSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsBeginTransactionSecurity, _super);
    function DatastoreProjectsBeginTransactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsBeginTransactionSecurityOption1)
    ], DatastoreProjectsBeginTransactionSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsBeginTransactionSecurityOption2)
    ], DatastoreProjectsBeginTransactionSecurity.prototype, "option2", void 0);
    return DatastoreProjectsBeginTransactionSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsBeginTransactionSecurity };
var DatastoreProjectsBeginTransactionRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsBeginTransactionRequest, _super);
    function DatastoreProjectsBeginTransactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsBeginTransactionPathParams)
    ], DatastoreProjectsBeginTransactionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsBeginTransactionQueryParams)
    ], DatastoreProjectsBeginTransactionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BeginTransactionRequest)
    ], DatastoreProjectsBeginTransactionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsBeginTransactionSecurity)
    ], DatastoreProjectsBeginTransactionRequest.prototype, "security", void 0);
    return DatastoreProjectsBeginTransactionRequest;
}(SpeakeasyBase));
export { DatastoreProjectsBeginTransactionRequest };
var DatastoreProjectsBeginTransactionResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsBeginTransactionResponse, _super);
    function DatastoreProjectsBeginTransactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BeginTransactionResponse)
    ], DatastoreProjectsBeginTransactionResponse.prototype, "beginTransactionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsBeginTransactionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsBeginTransactionResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsBeginTransactionResponse;
}(SpeakeasyBase));
export { DatastoreProjectsBeginTransactionResponse };
