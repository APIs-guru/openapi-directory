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
var CloudsearchIndexingDatasourcesDeleteSchemaPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaPathParams, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaPathParams };
var CloudsearchIndexingDatasourcesDeleteSchemaQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaQueryParams, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaQueryParams };
var CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1 };
var CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2 };
var CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3 };
var CloudsearchIndexingDatasourcesDeleteSchemaSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaSecurity, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3)
    ], CloudsearchIndexingDatasourcesDeleteSchemaSecurity.prototype, "option3", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaSecurity };
var CloudsearchIndexingDatasourcesDeleteSchemaRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaRequest, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesDeleteSchemaPathParams)
    ], CloudsearchIndexingDatasourcesDeleteSchemaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesDeleteSchemaQueryParams)
    ], CloudsearchIndexingDatasourcesDeleteSchemaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesDeleteSchemaSecurity)
    ], CloudsearchIndexingDatasourcesDeleteSchemaRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaRequest };
var CloudsearchIndexingDatasourcesDeleteSchemaResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesDeleteSchemaResponse, _super);
    function CloudsearchIndexingDatasourcesDeleteSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesDeleteSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchIndexingDatasourcesDeleteSchemaResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesDeleteSchemaResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesDeleteSchemaResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesDeleteSchemaResponse };
