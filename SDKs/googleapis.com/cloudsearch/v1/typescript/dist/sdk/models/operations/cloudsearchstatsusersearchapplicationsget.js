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
var CloudsearchStatsUserSearchapplicationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetPathParams, _super);
    function CloudsearchStatsUserSearchapplicationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetPathParams.prototype, "name", void 0);
    return CloudsearchStatsUserSearchapplicationsGetPathParams;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetPathParams };
var CloudsearchStatsUserSearchapplicationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetQueryParams, _super);
    function CloudsearchStatsUserSearchapplicationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "fromDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "fromDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "fromDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "toDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "toDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "toDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchStatsUserSearchapplicationsGetQueryParams;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetQueryParams };
var CloudsearchStatsUserSearchapplicationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetSecurityOption1, _super);
    function CloudsearchStatsUserSearchapplicationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsUserSearchapplicationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsUserSearchapplicationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchStatsUserSearchapplicationsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetSecurityOption1 };
var CloudsearchStatsUserSearchapplicationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetSecurityOption2, _super);
    function CloudsearchStatsUserSearchapplicationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsUserSearchapplicationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsUserSearchapplicationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchStatsUserSearchapplicationsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetSecurityOption2 };
var CloudsearchStatsUserSearchapplicationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetSecurityOption3, _super);
    function CloudsearchStatsUserSearchapplicationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsUserSearchapplicationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsUserSearchapplicationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchStatsUserSearchapplicationsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetSecurityOption3 };
var CloudsearchStatsUserSearchapplicationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetSecurity, _super);
    function CloudsearchStatsUserSearchapplicationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsUserSearchapplicationsGetSecurityOption1)
    ], CloudsearchStatsUserSearchapplicationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsUserSearchapplicationsGetSecurityOption2)
    ], CloudsearchStatsUserSearchapplicationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsUserSearchapplicationsGetSecurityOption3)
    ], CloudsearchStatsUserSearchapplicationsGetSecurity.prototype, "option3", void 0);
    return CloudsearchStatsUserSearchapplicationsGetSecurity;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetSecurity };
var CloudsearchStatsUserSearchapplicationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetRequest, _super);
    function CloudsearchStatsUserSearchapplicationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsUserSearchapplicationsGetPathParams)
    ], CloudsearchStatsUserSearchapplicationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsUserSearchapplicationsGetQueryParams)
    ], CloudsearchStatsUserSearchapplicationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsUserSearchapplicationsGetSecurity)
    ], CloudsearchStatsUserSearchapplicationsGetRequest.prototype, "security", void 0);
    return CloudsearchStatsUserSearchapplicationsGetRequest;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetRequest };
var CloudsearchStatsUserSearchapplicationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudsearchStatsUserSearchapplicationsGetResponse, _super);
    function CloudsearchStatsUserSearchapplicationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchStatsUserSearchapplicationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetSearchApplicationUserStatsResponse)
    ], CloudsearchStatsUserSearchapplicationsGetResponse.prototype, "getSearchApplicationUserStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchStatsUserSearchapplicationsGetResponse.prototype, "statusCode", void 0);
    return CloudsearchStatsUserSearchapplicationsGetResponse;
}(SpeakeasyBase));
export { CloudsearchStatsUserSearchapplicationsGetResponse };
