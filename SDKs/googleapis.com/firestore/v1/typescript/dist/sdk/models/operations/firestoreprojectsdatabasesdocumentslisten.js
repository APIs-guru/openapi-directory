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
var FirestoreProjectsDatabasesDocumentsListenPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListenPathParams, _super);
    function FirestoreProjectsDatabasesDocumentsListenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenPathParams.prototype, "database", void 0);
    return FirestoreProjectsDatabasesDocumentsListenPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListenPathParams };
var FirestoreProjectsDatabasesDocumentsListenQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListenQueryParams, _super);
    function FirestoreProjectsDatabasesDocumentsListenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesDocumentsListenQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListenQueryParams };
var FirestoreProjectsDatabasesDocumentsListenSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListenSecurityOption1, _super);
    function FirestoreProjectsDatabasesDocumentsListenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsListenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsListenSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsListenSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListenSecurityOption1 };
var FirestoreProjectsDatabasesDocumentsListenSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListenSecurityOption2, _super);
    function FirestoreProjectsDatabasesDocumentsListenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesDocumentsListenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesDocumentsListenSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesDocumentsListenSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListenSecurityOption2 };
var FirestoreProjectsDatabasesDocumentsListenSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListenSecurity, _super);
    function FirestoreProjectsDatabasesDocumentsListenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListenSecurityOption1)
    ], FirestoreProjectsDatabasesDocumentsListenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListenSecurityOption2)
    ], FirestoreProjectsDatabasesDocumentsListenSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesDocumentsListenSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListenSecurity };
var FirestoreProjectsDatabasesDocumentsListenRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListenRequest, _super);
    function FirestoreProjectsDatabasesDocumentsListenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListenPathParams)
    ], FirestoreProjectsDatabasesDocumentsListenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListenQueryParams)
    ], FirestoreProjectsDatabasesDocumentsListenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListenRequest)
    ], FirestoreProjectsDatabasesDocumentsListenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesDocumentsListenSecurity)
    ], FirestoreProjectsDatabasesDocumentsListenRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesDocumentsListenRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListenRequest };
var FirestoreProjectsDatabasesDocumentsListenResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesDocumentsListenResponse, _super);
    function FirestoreProjectsDatabasesDocumentsListenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesDocumentsListenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListenResponse)
    ], FirestoreProjectsDatabasesDocumentsListenResponse.prototype, "listenResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesDocumentsListenResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesDocumentsListenResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesDocumentsListenResponse };
