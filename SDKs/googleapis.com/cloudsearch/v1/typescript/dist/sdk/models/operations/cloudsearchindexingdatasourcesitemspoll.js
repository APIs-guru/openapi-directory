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
var CloudsearchIndexingDatasourcesItemsPollPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPollPathParams, _super);
    function CloudsearchIndexingDatasourcesItemsPollPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesItemsPollPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPollPathParams };
var CloudsearchIndexingDatasourcesItemsPollQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPollQueryParams, _super);
    function CloudsearchIndexingDatasourcesItemsPollQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesItemsPollQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPollQueryParams };
var CloudsearchIndexingDatasourcesItemsPollSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPollSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesItemsPollSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsPollSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsPollSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsPollSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPollSecurityOption1 };
var CloudsearchIndexingDatasourcesItemsPollSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPollSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesItemsPollSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsPollSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsPollSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsPollSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPollSecurityOption2 };
var CloudsearchIndexingDatasourcesItemsPollSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPollSecurity, _super);
    function CloudsearchIndexingDatasourcesItemsPollSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPollSecurityOption1)
    ], CloudsearchIndexingDatasourcesItemsPollSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPollSecurityOption2)
    ], CloudsearchIndexingDatasourcesItemsPollSecurity.prototype, "option2", void 0);
    return CloudsearchIndexingDatasourcesItemsPollSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPollSecurity };
var CloudsearchIndexingDatasourcesItemsPollRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPollRequest, _super);
    function CloudsearchIndexingDatasourcesItemsPollRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPollPathParams)
    ], CloudsearchIndexingDatasourcesItemsPollRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPollQueryParams)
    ], CloudsearchIndexingDatasourcesItemsPollRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PollItemsRequest)
    ], CloudsearchIndexingDatasourcesItemsPollRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPollSecurity)
    ], CloudsearchIndexingDatasourcesItemsPollRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesItemsPollRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPollRequest };
var CloudsearchIndexingDatasourcesItemsPollResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPollResponse, _super);
    function CloudsearchIndexingDatasourcesItemsPollResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPollResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PollItemsResponse)
    ], CloudsearchIndexingDatasourcesItemsPollResponse.prototype, "pollItemsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesItemsPollResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesItemsPollResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPollResponse };
