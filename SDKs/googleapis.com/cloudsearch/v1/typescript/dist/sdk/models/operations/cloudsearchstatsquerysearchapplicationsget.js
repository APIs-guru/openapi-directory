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
var CloudsearchStatsQuerySearchapplicationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetPathParams, _super);
    function CloudsearchStatsQuerySearchapplicationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetPathParams.prototype, "name", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetPathParams;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetPathParams };
var CloudsearchStatsQuerySearchapplicationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetQueryParams, _super);
    function CloudsearchStatsQuerySearchapplicationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "fromDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "fromDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "fromDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "toDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "toDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "toDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetQueryParams;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetQueryParams };
var CloudsearchStatsQuerySearchapplicationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetSecurityOption1, _super);
    function CloudsearchStatsQuerySearchapplicationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetSecurityOption1 };
var CloudsearchStatsQuerySearchapplicationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetSecurityOption2, _super);
    function CloudsearchStatsQuerySearchapplicationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetSecurityOption2 };
var CloudsearchStatsQuerySearchapplicationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetSecurityOption3, _super);
    function CloudsearchStatsQuerySearchapplicationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetSecurityOption3 };
var CloudsearchStatsQuerySearchapplicationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetSecurity, _super);
    function CloudsearchStatsQuerySearchapplicationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsQuerySearchapplicationsGetSecurityOption1)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsQuerySearchapplicationsGetSecurityOption2)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsQuerySearchapplicationsGetSecurityOption3)
    ], CloudsearchStatsQuerySearchapplicationsGetSecurity.prototype, "option3", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetSecurity;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetSecurity };
var CloudsearchStatsQuerySearchapplicationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetRequest, _super);
    function CloudsearchStatsQuerySearchapplicationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsQuerySearchapplicationsGetPathParams)
    ], CloudsearchStatsQuerySearchapplicationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsQuerySearchapplicationsGetQueryParams)
    ], CloudsearchStatsQuerySearchapplicationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsQuerySearchapplicationsGetSecurity)
    ], CloudsearchStatsQuerySearchapplicationsGetRequest.prototype, "security", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetRequest;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetRequest };
var CloudsearchStatsQuerySearchapplicationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudsearchStatsQuerySearchapplicationsGetResponse, _super);
    function CloudsearchStatsQuerySearchapplicationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchStatsQuerySearchapplicationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetSearchApplicationQueryStatsResponse)
    ], CloudsearchStatsQuerySearchapplicationsGetResponse.prototype, "getSearchApplicationQueryStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchStatsQuerySearchapplicationsGetResponse.prototype, "statusCode", void 0);
    return CloudsearchStatsQuerySearchapplicationsGetResponse;
}(SpeakeasyBase));
export { CloudsearchStatsQuerySearchapplicationsGetResponse };
