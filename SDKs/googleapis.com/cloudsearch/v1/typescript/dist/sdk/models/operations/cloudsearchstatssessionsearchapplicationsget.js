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
var CloudsearchStatsSessionSearchapplicationsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetPathParams, _super);
    function CloudsearchStatsSessionSearchapplicationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetPathParams.prototype, "name", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetPathParams;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetPathParams };
var CloudsearchStatsSessionSearchapplicationsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetQueryParams, _super);
    function CloudsearchStatsSessionSearchapplicationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "fromDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "fromDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "fromDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "toDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "toDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "toDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetQueryParams;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetQueryParams };
var CloudsearchStatsSessionSearchapplicationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetSecurityOption1, _super);
    function CloudsearchStatsSessionSearchapplicationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetSecurityOption1 };
var CloudsearchStatsSessionSearchapplicationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetSecurityOption2, _super);
    function CloudsearchStatsSessionSearchapplicationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetSecurityOption2 };
var CloudsearchStatsSessionSearchapplicationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetSecurityOption3, _super);
    function CloudsearchStatsSessionSearchapplicationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetSecurityOption3 };
var CloudsearchStatsSessionSearchapplicationsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetSecurity, _super);
    function CloudsearchStatsSessionSearchapplicationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsSessionSearchapplicationsGetSecurityOption1)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsSessionSearchapplicationsGetSecurityOption2)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsSessionSearchapplicationsGetSecurityOption3)
    ], CloudsearchStatsSessionSearchapplicationsGetSecurity.prototype, "option3", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetSecurity;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetSecurity };
var CloudsearchStatsSessionSearchapplicationsGetRequest = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetRequest, _super);
    function CloudsearchStatsSessionSearchapplicationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsSessionSearchapplicationsGetPathParams)
    ], CloudsearchStatsSessionSearchapplicationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsSessionSearchapplicationsGetQueryParams)
    ], CloudsearchStatsSessionSearchapplicationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsSessionSearchapplicationsGetSecurity)
    ], CloudsearchStatsSessionSearchapplicationsGetRequest.prototype, "security", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetRequest;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetRequest };
var CloudsearchStatsSessionSearchapplicationsGetResponse = /** @class */ (function (_super) {
    __extends(CloudsearchStatsSessionSearchapplicationsGetResponse, _super);
    function CloudsearchStatsSessionSearchapplicationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchStatsSessionSearchapplicationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetSearchApplicationSessionStatsResponse)
    ], CloudsearchStatsSessionSearchapplicationsGetResponse.prototype, "getSearchApplicationSessionStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchStatsSessionSearchapplicationsGetResponse.prototype, "statusCode", void 0);
    return CloudsearchStatsSessionSearchapplicationsGetResponse;
}(SpeakeasyBase));
export { CloudsearchStatsSessionSearchapplicationsGetResponse };
