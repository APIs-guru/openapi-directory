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
var CloudsearchIndexingDatasourcesItemsUploadPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsUploadPathParams, _super);
    function CloudsearchIndexingDatasourcesItemsUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesItemsUploadPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsUploadPathParams };
var CloudsearchIndexingDatasourcesItemsUploadQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsUploadQueryParams, _super);
    function CloudsearchIndexingDatasourcesItemsUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesItemsUploadQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsUploadQueryParams };
var CloudsearchIndexingDatasourcesItemsUploadSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsUploadSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesItemsUploadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsUploadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsUploadSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsUploadSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsUploadSecurityOption1 };
var CloudsearchIndexingDatasourcesItemsUploadSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsUploadSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesItemsUploadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsUploadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsUploadSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsUploadSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsUploadSecurityOption2 };
var CloudsearchIndexingDatasourcesItemsUploadSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsUploadSecurity, _super);
    function CloudsearchIndexingDatasourcesItemsUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsUploadSecurityOption1)
    ], CloudsearchIndexingDatasourcesItemsUploadSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsUploadSecurityOption2)
    ], CloudsearchIndexingDatasourcesItemsUploadSecurity.prototype, "option2", void 0);
    return CloudsearchIndexingDatasourcesItemsUploadSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsUploadSecurity };
var CloudsearchIndexingDatasourcesItemsUploadRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsUploadRequest, _super);
    function CloudsearchIndexingDatasourcesItemsUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsUploadPathParams)
    ], CloudsearchIndexingDatasourcesItemsUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsUploadQueryParams)
    ], CloudsearchIndexingDatasourcesItemsUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.StartUploadItemRequest)
    ], CloudsearchIndexingDatasourcesItemsUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsUploadSecurity)
    ], CloudsearchIndexingDatasourcesItemsUploadRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesItemsUploadRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsUploadRequest };
var CloudsearchIndexingDatasourcesItemsUploadResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsUploadResponse, _super);
    function CloudsearchIndexingDatasourcesItemsUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesItemsUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UploadItemRef)
    ], CloudsearchIndexingDatasourcesItemsUploadResponse.prototype, "uploadItemRef", void 0);
    return CloudsearchIndexingDatasourcesItemsUploadResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsUploadResponse };
