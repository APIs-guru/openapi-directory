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
var CloudsearchStatsIndexDatasourcesGetPathParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetPathParams, _super);
    function CloudsearchStatsIndexDatasourcesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetPathParams.prototype, "name", void 0);
    return CloudsearchStatsIndexDatasourcesGetPathParams;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetPathParams };
var CloudsearchStatsIndexDatasourcesGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetQueryParams, _super);
    function CloudsearchStatsIndexDatasourcesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "fromDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "fromDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "fromDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "toDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "toDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "toDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchStatsIndexDatasourcesGetQueryParams;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetQueryParams };
var CloudsearchStatsIndexDatasourcesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetSecurityOption1, _super);
    function CloudsearchStatsIndexDatasourcesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsIndexDatasourcesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsIndexDatasourcesGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchStatsIndexDatasourcesGetSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetSecurityOption1 };
var CloudsearchStatsIndexDatasourcesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetSecurityOption2, _super);
    function CloudsearchStatsIndexDatasourcesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsIndexDatasourcesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsIndexDatasourcesGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchStatsIndexDatasourcesGetSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetSecurityOption2 };
var CloudsearchStatsIndexDatasourcesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetSecurityOption3, _super);
    function CloudsearchStatsIndexDatasourcesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsIndexDatasourcesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsIndexDatasourcesGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchStatsIndexDatasourcesGetSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetSecurityOption3 };
var CloudsearchStatsIndexDatasourcesGetSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetSecurity, _super);
    function CloudsearchStatsIndexDatasourcesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsIndexDatasourcesGetSecurityOption1)
    ], CloudsearchStatsIndexDatasourcesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsIndexDatasourcesGetSecurityOption2)
    ], CloudsearchStatsIndexDatasourcesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsIndexDatasourcesGetSecurityOption3)
    ], CloudsearchStatsIndexDatasourcesGetSecurity.prototype, "option3", void 0);
    return CloudsearchStatsIndexDatasourcesGetSecurity;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetSecurity };
var CloudsearchStatsIndexDatasourcesGetRequest = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetRequest, _super);
    function CloudsearchStatsIndexDatasourcesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsIndexDatasourcesGetPathParams)
    ], CloudsearchStatsIndexDatasourcesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsIndexDatasourcesGetQueryParams)
    ], CloudsearchStatsIndexDatasourcesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsIndexDatasourcesGetSecurity)
    ], CloudsearchStatsIndexDatasourcesGetRequest.prototype, "security", void 0);
    return CloudsearchStatsIndexDatasourcesGetRequest;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetRequest };
var CloudsearchStatsIndexDatasourcesGetResponse = /** @class */ (function (_super) {
    __extends(CloudsearchStatsIndexDatasourcesGetResponse, _super);
    function CloudsearchStatsIndexDatasourcesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchStatsIndexDatasourcesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDataSourceIndexStatsResponse)
    ], CloudsearchStatsIndexDatasourcesGetResponse.prototype, "getDataSourceIndexStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchStatsIndexDatasourcesGetResponse.prototype, "statusCode", void 0);
    return CloudsearchStatsIndexDatasourcesGetResponse;
}(SpeakeasyBase));
export { CloudsearchStatsIndexDatasourcesGetResponse };
