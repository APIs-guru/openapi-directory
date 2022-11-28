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
var DatastoreProjectsCommitPathParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsCommitPathParams, _super);
    function DatastoreProjectsCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitPathParams.prototype, "projectId", void 0);
    return DatastoreProjectsCommitPathParams;
}(SpeakeasyBase));
export { DatastoreProjectsCommitPathParams };
var DatastoreProjectsCommitQueryParams = /** @class */ (function (_super) {
    __extends(DatastoreProjectsCommitQueryParams, _super);
    function DatastoreProjectsCommitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatastoreProjectsCommitQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitQueryParams.prototype, "uploadProtocol", void 0);
    return DatastoreProjectsCommitQueryParams;
}(SpeakeasyBase));
export { DatastoreProjectsCommitQueryParams };
var DatastoreProjectsCommitSecurityOption1 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsCommitSecurityOption1, _super);
    function DatastoreProjectsCommitSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsCommitSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsCommitSecurityOption1.prototype, "oauth2c", void 0);
    return DatastoreProjectsCommitSecurityOption1;
}(SpeakeasyBase));
export { DatastoreProjectsCommitSecurityOption1 };
var DatastoreProjectsCommitSecurityOption2 = /** @class */ (function (_super) {
    __extends(DatastoreProjectsCommitSecurityOption2, _super);
    function DatastoreProjectsCommitSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatastoreProjectsCommitSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatastoreProjectsCommitSecurityOption2.prototype, "oauth2c", void 0);
    return DatastoreProjectsCommitSecurityOption2;
}(SpeakeasyBase));
export { DatastoreProjectsCommitSecurityOption2 };
var DatastoreProjectsCommitSecurity = /** @class */ (function (_super) {
    __extends(DatastoreProjectsCommitSecurity, _super);
    function DatastoreProjectsCommitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsCommitSecurityOption1)
    ], DatastoreProjectsCommitSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DatastoreProjectsCommitSecurityOption2)
    ], DatastoreProjectsCommitSecurity.prototype, "option2", void 0);
    return DatastoreProjectsCommitSecurity;
}(SpeakeasyBase));
export { DatastoreProjectsCommitSecurity };
var DatastoreProjectsCommitRequest = /** @class */ (function (_super) {
    __extends(DatastoreProjectsCommitRequest, _super);
    function DatastoreProjectsCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsCommitPathParams)
    ], DatastoreProjectsCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsCommitQueryParams)
    ], DatastoreProjectsCommitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommitRequest)
    ], DatastoreProjectsCommitRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatastoreProjectsCommitSecurity)
    ], DatastoreProjectsCommitRequest.prototype, "security", void 0);
    return DatastoreProjectsCommitRequest;
}(SpeakeasyBase));
export { DatastoreProjectsCommitRequest };
var DatastoreProjectsCommitResponse = /** @class */ (function (_super) {
    __extends(DatastoreProjectsCommitResponse, _super);
    function DatastoreProjectsCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommitResponse)
    ], DatastoreProjectsCommitResponse.prototype, "commitResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatastoreProjectsCommitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatastoreProjectsCommitResponse.prototype, "statusCode", void 0);
    return DatastoreProjectsCommitResponse;
}(SpeakeasyBase));
export { DatastoreProjectsCommitResponse };
