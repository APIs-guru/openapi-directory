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
var CloudsearchDebugDatasourcesItemsCheckAccessPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchDebugDatasourcesItemsCheckAccessPathParams, _super);
    function CloudsearchDebugDatasourcesItemsCheckAccessPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessPathParams.prototype, "name", void 0);
    return CloudsearchDebugDatasourcesItemsCheckAccessPathParams;
}(SpeakeasyBase));
export { CloudsearchDebugDatasourcesItemsCheckAccessPathParams };
var CloudsearchDebugDatasourcesItemsCheckAccessQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchDebugDatasourcesItemsCheckAccessQueryParams, _super);
    function CloudsearchDebugDatasourcesItemsCheckAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchDebugDatasourcesItemsCheckAccessQueryParams;
}(SpeakeasyBase));
export { CloudsearchDebugDatasourcesItemsCheckAccessQueryParams };
var CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1, _super);
    function CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1 };
var CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2, _super);
    function CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2 };
var CloudsearchDebugDatasourcesItemsCheckAccessSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchDebugDatasourcesItemsCheckAccessSecurity, _super);
    function CloudsearchDebugDatasourcesItemsCheckAccessSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1)
    ], CloudsearchDebugDatasourcesItemsCheckAccessSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption2)
    ], CloudsearchDebugDatasourcesItemsCheckAccessSecurity.prototype, "option2", void 0);
    return CloudsearchDebugDatasourcesItemsCheckAccessSecurity;
}(SpeakeasyBase));
export { CloudsearchDebugDatasourcesItemsCheckAccessSecurity };
var CloudsearchDebugDatasourcesItemsCheckAccessRequest = /** @class */ (function (_super) {
    __extends(CloudsearchDebugDatasourcesItemsCheckAccessRequest, _super);
    function CloudsearchDebugDatasourcesItemsCheckAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugDatasourcesItemsCheckAccessPathParams)
    ], CloudsearchDebugDatasourcesItemsCheckAccessRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugDatasourcesItemsCheckAccessQueryParams)
    ], CloudsearchDebugDatasourcesItemsCheckAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Principal)
    ], CloudsearchDebugDatasourcesItemsCheckAccessRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchDebugDatasourcesItemsCheckAccessSecurity)
    ], CloudsearchDebugDatasourcesItemsCheckAccessRequest.prototype, "security", void 0);
    return CloudsearchDebugDatasourcesItemsCheckAccessRequest;
}(SpeakeasyBase));
export { CloudsearchDebugDatasourcesItemsCheckAccessRequest };
var CloudsearchDebugDatasourcesItemsCheckAccessResponse = /** @class */ (function (_super) {
    __extends(CloudsearchDebugDatasourcesItemsCheckAccessResponse, _super);
    function CloudsearchDebugDatasourcesItemsCheckAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CheckAccessResponse)
    ], CloudsearchDebugDatasourcesItemsCheckAccessResponse.prototype, "checkAccessResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchDebugDatasourcesItemsCheckAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchDebugDatasourcesItemsCheckAccessResponse.prototype, "statusCode", void 0);
    return CloudsearchDebugDatasourcesItemsCheckAccessResponse;
}(SpeakeasyBase));
export { CloudsearchDebugDatasourcesItemsCheckAccessResponse };
