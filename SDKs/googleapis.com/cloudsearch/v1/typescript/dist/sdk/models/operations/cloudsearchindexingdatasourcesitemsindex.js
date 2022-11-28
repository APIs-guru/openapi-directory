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
var CloudsearchIndexingDatasourcesItemsIndexPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsIndexPathParams, _super);
    function CloudsearchIndexingDatasourcesItemsIndexPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesItemsIndexPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsIndexPathParams };
var CloudsearchIndexingDatasourcesItemsIndexQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsIndexQueryParams, _super);
    function CloudsearchIndexingDatasourcesItemsIndexQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesItemsIndexQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsIndexQueryParams };
var CloudsearchIndexingDatasourcesItemsIndexSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsIndexSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesItemsIndexSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsIndexSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsIndexSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsIndexSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsIndexSecurityOption1 };
var CloudsearchIndexingDatasourcesItemsIndexSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsIndexSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesItemsIndexSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsIndexSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsIndexSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsIndexSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsIndexSecurityOption2 };
var CloudsearchIndexingDatasourcesItemsIndexSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsIndexSecurity, _super);
    function CloudsearchIndexingDatasourcesItemsIndexSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsIndexSecurityOption1)
    ], CloudsearchIndexingDatasourcesItemsIndexSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsIndexSecurityOption2)
    ], CloudsearchIndexingDatasourcesItemsIndexSecurity.prototype, "option2", void 0);
    return CloudsearchIndexingDatasourcesItemsIndexSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsIndexSecurity };
var CloudsearchIndexingDatasourcesItemsIndexRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsIndexRequest, _super);
    function CloudsearchIndexingDatasourcesItemsIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsIndexPathParams)
    ], CloudsearchIndexingDatasourcesItemsIndexRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsIndexQueryParams)
    ], CloudsearchIndexingDatasourcesItemsIndexRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.IndexItemRequest)
    ], CloudsearchIndexingDatasourcesItemsIndexRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsIndexSecurity)
    ], CloudsearchIndexingDatasourcesItemsIndexRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesItemsIndexRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsIndexRequest };
var CloudsearchIndexingDatasourcesItemsIndexResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsIndexResponse, _super);
    function CloudsearchIndexingDatasourcesItemsIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchIndexingDatasourcesItemsIndexResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesItemsIndexResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesItemsIndexResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsIndexResponse };
