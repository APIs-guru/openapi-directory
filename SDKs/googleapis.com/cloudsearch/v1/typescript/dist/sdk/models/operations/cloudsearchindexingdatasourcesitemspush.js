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
var CloudsearchIndexingDatasourcesItemsPushPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPushPathParams, _super);
    function CloudsearchIndexingDatasourcesItemsPushPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushPathParams.prototype, "name", void 0);
    return CloudsearchIndexingDatasourcesItemsPushPathParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPushPathParams };
var CloudsearchIndexingDatasourcesItemsPushQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPushQueryParams, _super);
    function CloudsearchIndexingDatasourcesItemsPushQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchIndexingDatasourcesItemsPushQueryParams;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPushQueryParams };
var CloudsearchIndexingDatasourcesItemsPushSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPushSecurityOption1, _super);
    function CloudsearchIndexingDatasourcesItemsPushSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsPushSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsPushSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsPushSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPushSecurityOption1 };
var CloudsearchIndexingDatasourcesItemsPushSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPushSecurityOption2, _super);
    function CloudsearchIndexingDatasourcesItemsPushSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchIndexingDatasourcesItemsPushSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchIndexingDatasourcesItemsPushSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchIndexingDatasourcesItemsPushSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPushSecurityOption2 };
var CloudsearchIndexingDatasourcesItemsPushSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPushSecurity, _super);
    function CloudsearchIndexingDatasourcesItemsPushSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPushSecurityOption1)
    ], CloudsearchIndexingDatasourcesItemsPushSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPushSecurityOption2)
    ], CloudsearchIndexingDatasourcesItemsPushSecurity.prototype, "option2", void 0);
    return CloudsearchIndexingDatasourcesItemsPushSecurity;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPushSecurity };
var CloudsearchIndexingDatasourcesItemsPushRequest = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPushRequest, _super);
    function CloudsearchIndexingDatasourcesItemsPushRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPushPathParams)
    ], CloudsearchIndexingDatasourcesItemsPushRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPushQueryParams)
    ], CloudsearchIndexingDatasourcesItemsPushRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PushItemRequest)
    ], CloudsearchIndexingDatasourcesItemsPushRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchIndexingDatasourcesItemsPushSecurity)
    ], CloudsearchIndexingDatasourcesItemsPushRequest.prototype, "security", void 0);
    return CloudsearchIndexingDatasourcesItemsPushRequest;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPushRequest };
var CloudsearchIndexingDatasourcesItemsPushResponse = /** @class */ (function (_super) {
    __extends(CloudsearchIndexingDatasourcesItemsPushResponse, _super);
    function CloudsearchIndexingDatasourcesItemsPushResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchIndexingDatasourcesItemsPushResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Item)
    ], CloudsearchIndexingDatasourcesItemsPushResponse.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchIndexingDatasourcesItemsPushResponse.prototype, "statusCode", void 0);
    return CloudsearchIndexingDatasourcesItemsPushResponse;
}(SpeakeasyBase));
export { CloudsearchIndexingDatasourcesItemsPushResponse };
