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
var DatastoreProjectsRollbackPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRollbackPathParams, _super);
    function DatastoreProjectsRollbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsRollbackPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsRollbackPathParams };
var DatastoreProjectsRollbackQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRollbackQueryParams, _super);
    function DatastoreProjectsRollbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsRollbackQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsRollbackQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsRollbackQueryParams };
var DatastoreProjectsRollbackSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRollbackSecurityOption1, _super);
    function DatastoreProjectsRollbackSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsRollbackSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsRollbackSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsRollbackSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsRollbackSecurityOption1 };
var DatastoreProjectsRollbackSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRollbackSecurityOption2, _super);
    function DatastoreProjectsRollbackSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsRollbackSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsRollbackSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsRollbackSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsRollbackSecurityOption2 };
var DatastoreProjectsRollbackSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRollbackSecurity, _super);
    function DatastoreProjectsRollbackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsRollbackSecurityOption1)
    ], DatastoreProjectsRollbackSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsRollbackSecurityOption2)
    ], DatastoreProjectsRollbackSecurity.prototype, "option2", void 0);
    return DatastoreProjectsRollbackSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsRollbackSecurity };
var DatastoreProjectsRollbackRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRollbackRequest, _super);
    function DatastoreProjectsRollbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsRollbackPathParams)
    ], DatastoreProjectsRollbackRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsRollbackQueryParams)
    ], DatastoreProjectsRollbackRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RollbackRequest)
    ], DatastoreProjectsRollbackRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsRollbackSecurity)
    ], DatastoreProjectsRollbackRequest.prototype, "security", void 0);
    return DatastoreProjectsRollbackRequest;
}(SpeakeasyBase));
export { DatastoreProjectsRollbackRequest };
var DatastoreProjectsRollbackResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsRollbackResponse, _super);
    function DatastoreProjectsRollbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsRollbackResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DatastoreProjectsRollbackResponse.prototype, "rollbackResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsRollbackResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsRollbackResponse;
}(SpeakeasyBase));
export { DatastoreProjectsRollbackResponse };
