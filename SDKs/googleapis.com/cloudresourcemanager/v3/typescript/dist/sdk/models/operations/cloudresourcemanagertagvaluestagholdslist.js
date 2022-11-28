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
var CloudresourcemanagerTagValuesTagHoldsListPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesTagHoldsListPathParams, _super);
    function CloudresourcemanagerTagValuesTagHoldsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListPathParams.prototype, "parent", void 0);
    return CloudresourcemanagerTagValuesTagHoldsListPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesTagHoldsListPathParams };
var CloudresourcemanagerTagValuesTagHoldsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesTagHoldsListQueryParams, _super);
    function CloudresourcemanagerTagValuesTagHoldsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerTagValuesTagHoldsListQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesTagHoldsListQueryParams };
var CloudresourcemanagerTagValuesTagHoldsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesTagHoldsListSecurityOption1, _super);
    function CloudresourcemanagerTagValuesTagHoldsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesTagHoldsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesTagHoldsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesTagHoldsListSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesTagHoldsListSecurityOption1 };
var CloudresourcemanagerTagValuesTagHoldsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesTagHoldsListSecurityOption2, _super);
    function CloudresourcemanagerTagValuesTagHoldsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerTagValuesTagHoldsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerTagValuesTagHoldsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerTagValuesTagHoldsListSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesTagHoldsListSecurityOption2 };
var CloudresourcemanagerTagValuesTagHoldsListSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesTagHoldsListSecurity, _super);
    function CloudresourcemanagerTagValuesTagHoldsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesTagHoldsListSecurityOption1)
    ], CloudresourcemanagerTagValuesTagHoldsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerTagValuesTagHoldsListSecurityOption2)
    ], CloudresourcemanagerTagValuesTagHoldsListSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerTagValuesTagHoldsListSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesTagHoldsListSecurity };
var CloudresourcemanagerTagValuesTagHoldsListRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesTagHoldsListRequest, _super);
    function CloudresourcemanagerTagValuesTagHoldsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesTagHoldsListPathParams)
    ], CloudresourcemanagerTagValuesTagHoldsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesTagHoldsListQueryParams)
    ], CloudresourcemanagerTagValuesTagHoldsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerTagValuesTagHoldsListSecurity)
    ], CloudresourcemanagerTagValuesTagHoldsListRequest.prototype, "security", void 0);
    return CloudresourcemanagerTagValuesTagHoldsListRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesTagHoldsListRequest };
var CloudresourcemanagerTagValuesTagHoldsListResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerTagValuesTagHoldsListResponse, _super);
    function CloudresourcemanagerTagValuesTagHoldsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerTagValuesTagHoldsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTagHoldsResponse)
    ], CloudresourcemanagerTagValuesTagHoldsListResponse.prototype, "listTagHoldsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerTagValuesTagHoldsListResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerTagValuesTagHoldsListResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerTagValuesTagHoldsListResponse };
