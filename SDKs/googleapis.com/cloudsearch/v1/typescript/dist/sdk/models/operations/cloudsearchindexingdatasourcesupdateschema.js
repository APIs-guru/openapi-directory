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
var CloudsearchIndexingDatasourcesUpdateSchemaPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaPathParams, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaPathParams };
var CloudsearchIndexingDatasourcesUpdateSchemaQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaQueryParams, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaQueryParams };
var CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1 };
var CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2 };
var CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3 };
var CloudsearchIndexingDatasourcesUpdateSchemaSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaSecurity, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3)
    ], CloudsearchIndexingDatasourcesUpdateSchemaSecurity.prototype, "option3", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaSecurity };
var CloudsearchIndexingDatasourcesUpdateSchemaRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaRequest, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesUpdateSchemaPathParams)
    ], CloudsearchIndexingDatasourcesUpdateSchemaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesUpdateSchemaQueryParams)
    ], CloudsearchIndexingDatasourcesUpdateSchemaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateSchemaRequest)
    ], CloudsearchIndexingDatasourcesUpdateSchemaRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesUpdateSchemaSecurity)
    ], CloudsearchIndexingDatasourcesUpdateSchemaRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaRequest };
var CloudsearchIndexingDatasourcesUpdateSchemaResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesUpdateSchemaResponse, _super);
    function CloudsearchIndexingDatasourcesUpdateSchemaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesUpdateSchemaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchIndexingDatasourcesUpdateSchemaResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesUpdateSchemaResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesUpdateSchemaResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesUpdateSchemaResponse };
