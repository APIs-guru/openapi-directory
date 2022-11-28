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
var FirestoreProjectsDatabasesOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsCancelPathParams, _super);
    function FirestoreProjectsDatabasesOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelPathParams.prototype, "name", void 0);
    return FirestoreProjectsDatabasesOperationsCancelPathParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsCancelPathParams };
var FirestoreProjectsDatabasesOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsCancelQueryParams, _super);
    function FirestoreProjectsDatabasesOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return FirestoreProjectsDatabasesOperationsCancelQueryParams;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsCancelQueryParams };
var FirestoreProjectsDatabasesOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsCancelSecurityOption1, _super);
    function FirestoreProjectsDatabasesOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsCancelSecurityOption1 };
var FirestoreProjectsDatabasesOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsCancelSecurityOption2, _super);
    function FirestoreProjectsDatabasesOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirestoreProjectsDatabasesOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirestoreProjectsDatabasesOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return FirestoreProjectsDatabasesOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsCancelSecurityOption2 };
var FirestoreProjectsDatabasesOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsCancelSecurity, _super);
    function FirestoreProjectsDatabasesOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsCancelSecurityOption1)
    ], FirestoreProjectsDatabasesOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsCancelSecurityOption2)
    ], FirestoreProjectsDatabasesOperationsCancelSecurity.prototype, "option2", void 0);
    return FirestoreProjectsDatabasesOperationsCancelSecurity;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsCancelSecurity };
var FirestoreProjectsDatabasesOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsCancelRequest, _super);
    function FirestoreProjectsDatabasesOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsCancelPathParams)
    ], FirestoreProjectsDatabasesOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsCancelQueryParams)
    ], FirestoreProjectsDatabasesOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], FirestoreProjectsDatabasesOperationsCancelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FirestoreProjectsDatabasesOperationsCancelSecurity)
    ], FirestoreProjectsDatabasesOperationsCancelRequest.prototype, "security", void 0);
    return FirestoreProjectsDatabasesOperationsCancelRequest;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsCancelRequest };
var FirestoreProjectsDatabasesOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(FirestoreProjectsDatabasesOperationsCancelResponse, _super);
    function FirestoreProjectsDatabasesOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FirestoreProjectsDatabasesOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], FirestoreProjectsDatabasesOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FirestoreProjectsDatabasesOperationsCancelResponse.prototype, "statusCode", void 0);
    return FirestoreProjectsDatabasesOperationsCancelResponse;
}(SpeakeasyBase));
export { FirestoreProjectsDatabasesOperationsCancelResponse };
