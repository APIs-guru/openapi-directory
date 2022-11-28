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
var CloudsearchStatsGetSearchapplicationQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetSearchapplicationQueryParams, _super);
    function CloudsearchStatsGetSearchapplicationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "endDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "endDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "endDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "startDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "startDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "startDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchStatsGetSearchapplicationQueryParams;
}(SpeakeasyBase));
export { CloudsearchStatsGetSearchapplicationQueryParams };
var CloudsearchStatsGetSearchapplicationSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetSearchapplicationSecurityOption1, _super);
    function CloudsearchStatsGetSearchapplicationSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsGetSearchapplicationSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsGetSearchapplicationSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetSearchapplicationSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchStatsGetSearchapplicationSecurityOption1 };
var CloudsearchStatsGetSearchapplicationSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetSearchapplicationSecurityOption2, _super);
    function CloudsearchStatsGetSearchapplicationSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsGetSearchapplicationSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsGetSearchapplicationSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetSearchapplicationSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchStatsGetSearchapplicationSecurityOption2 };
var CloudsearchStatsGetSearchapplicationSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetSearchapplicationSecurityOption3, _super);
    function CloudsearchStatsGetSearchapplicationSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsGetSearchapplicationSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsGetSearchapplicationSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetSearchapplicationSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchStatsGetSearchapplicationSecurityOption3 };
var CloudsearchStatsGetSearchapplicationSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetSearchapplicationSecurity, _super);
    function CloudsearchStatsGetSearchapplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetSearchapplicationSecurityOption1)
    ], CloudsearchStatsGetSearchapplicationSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetSearchapplicationSecurityOption2)
    ], CloudsearchStatsGetSearchapplicationSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetSearchapplicationSecurityOption3)
    ], CloudsearchStatsGetSearchapplicationSecurity.prototype, "option3", void 0);
    return CloudsearchStatsGetSearchapplicationSecurity;
}(SpeakeasyBase));
export { CloudsearchStatsGetSearchapplicationSecurity };
var CloudsearchStatsGetSearchapplicationRequest = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetSearchapplicationRequest, _super);
    function CloudsearchStatsGetSearchapplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsGetSearchapplicationQueryParams)
    ], CloudsearchStatsGetSearchapplicationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsGetSearchapplicationSecurity)
    ], CloudsearchStatsGetSearchapplicationRequest.prototype, "security", void 0);
    return CloudsearchStatsGetSearchapplicationRequest;
}(SpeakeasyBase));
export { CloudsearchStatsGetSearchapplicationRequest };
var CloudsearchStatsGetSearchapplicationResponse = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetSearchapplicationResponse, _super);
    function CloudsearchStatsGetSearchapplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchStatsGetSearchapplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetCustomerSearchApplicationStatsResponse)
    ], CloudsearchStatsGetSearchapplicationResponse.prototype, "getCustomerSearchApplicationStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetSearchapplicationResponse.prototype, "statusCode", void 0);
    return CloudsearchStatsGetSearchapplicationResponse;
}(SpeakeasyBase));
export { CloudsearchStatsGetSearchapplicationResponse };
