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
var CloudsearchIndexingDatasourcesItemsDeletePathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeletePathParams, _super);
    function CloudsearchIndexingDatasourcesItemsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeletePathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesItemsDeletePathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeletePathParams };
export var CloudsearchIndexingDatasourcesItemsDeleteModeEnum;
(function (CloudsearchIndexingDatasourcesItemsDeleteModeEnum) {
    CloudsearchIndexingDatasourcesItemsDeleteModeEnum["Unspecified"] = "UNSPECIFIED";
    CloudsearchIndexingDatasourcesItemsDeleteModeEnum["Synchronous"] = "SYNCHRONOUS";
    CloudsearchIndexingDatasourcesItemsDeleteModeEnum["Asynchronous"] = "ASYNCHRONOUS";
})(CloudsearchIndexingDatasourcesItemsDeleteModeEnum || (CloudsearchIndexingDatasourcesItemsDeleteModeEnum = {}));
var CloudsearchIndexingDatasourcesItemsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueryParams, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectorName" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "connectorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueryParams.prototype, "version", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueryParams };
var CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1 };
var CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2 };
var CloudsearchIndexingDatasourcesItemsDeleteSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteSecurity, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteSecurityOption1)
    ], CloudsearchIndexingDatasourcesItemsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteSecurityOption2)
    ], CloudsearchIndexingDatasourcesItemsDeleteSecurity.prototype, "option2", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteSecurity };
var CloudsearchIndexingDatasourcesItemsDeleteRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteRequest, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeletePathParams)
    ], CloudsearchIndexingDatasourcesItemsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteQueryParams)
    ], CloudsearchIndexingDatasourcesItemsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteSecurity)
    ], CloudsearchIndexingDatasourcesItemsDeleteRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteRequest };
var CloudsearchIndexingDatasourcesItemsDeleteResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteResponse, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchIndexingDatasourcesItemsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesItemsDeleteResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteResponse };
