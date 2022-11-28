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
var CloudsearchIndexingDatasourcesGetSchemaPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaPathParams, _super);
    function CloudsearchIndexingDatasourcesGetSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaPathParams };
var CloudsearchIndexingDatasourcesGetSchemaQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaQueryParams, _super);
    function CloudsearchIndexingDatasourcesGetSchemaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "debugOptionsEnableDebugging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaQueryParams };
var CloudsearchIndexingDatasourcesGetSchemaSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesGetSchemaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaSecurityOption1 };
var CloudsearchIndexingDatasourcesGetSchemaSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesGetSchemaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaSecurityOption2 };
var CloudsearchIndexingDatasourcesGetSchemaSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaSecurityOption3, _super);
    function CloudsearchIndexingDatasourcesGetSchemaSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaSecurityOption3 };
var CloudsearchIndexingDatasourcesGetSchemaSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaSecurity, _super);
    function CloudsearchIndexingDatasourcesGetSchemaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesGetSchemaSecurityOption1)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesGetSchemaSecurityOption2)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesGetSchemaSecurityOption3)
    ], CloudsearchIndexingDatasourcesGetSchemaSecurity.prototype, "option3", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaSecurity };
var CloudsearchIndexingDatasourcesGetSchemaRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaRequest, _super);
    function CloudsearchIndexingDatasourcesGetSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesGetSchemaPathParams)
    ], CloudsearchIndexingDatasourcesGetSchemaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesGetSchemaQueryParams)
    ], CloudsearchIndexingDatasourcesGetSchemaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesGetSchemaSecurity)
    ], CloudsearchIndexingDatasourcesGetSchemaRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaRequest };
var CloudsearchIndexingDatasourcesGetSchemaResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesGetSchemaResponse, _super);
    function CloudsearchIndexingDatasourcesGetSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesGetSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Schema)
    ], CloudsearchIndexingDatasourcesGetSchemaResponse.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesGetSchemaResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesGetSchemaResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesGetSchemaResponse };
