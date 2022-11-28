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
var CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams };
var CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams };
var CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1 };
var CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2 };
var CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption1)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurityOption2)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity.prototype, "option2", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity };
var CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteQueueItemsPathParams)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteQueueItemsQueryParams)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteQueueItemsRequest)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsDeleteQueueItemsSecurity)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueueItemsRequest };
var CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse, _super);
    function CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsDeleteQueueItemsResponse };
