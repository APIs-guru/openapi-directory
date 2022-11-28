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
var CloudsearchStatsGetIndexQueryParams = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetIndexQueryParams, _super);
    function CloudsearchStatsGetIndexQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "fromDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "fromDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "fromDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.day" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "toDateDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.month" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "toDateMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate.year" }),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "toDateYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexQueryParams.prototype, "uploadProtocol", void 0);
    return CloudsearchStatsGetIndexQueryParams;
}(SpeakeasyBase));
export { CloudsearchStatsGetIndexQueryParams };
var CloudsearchStatsGetIndexSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetIndexSecurityOption1, _super);
    function CloudsearchStatsGetIndexSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsGetIndexSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsGetIndexSecurityOption1.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetIndexSecurityOption1;
}(SpeakeasyBase));
export { CloudsearchStatsGetIndexSecurityOption1 };
var CloudsearchStatsGetIndexSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetIndexSecurityOption2, _super);
    function CloudsearchStatsGetIndexSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsGetIndexSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsGetIndexSecurityOption2.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetIndexSecurityOption2;
}(SpeakeasyBase));
export { CloudsearchStatsGetIndexSecurityOption2 };
var CloudsearchStatsGetIndexSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetIndexSecurityOption3, _super);
    function CloudsearchStatsGetIndexSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudsearchStatsGetIndexSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudsearchStatsGetIndexSecurityOption3.prototype, "oauth2c", void 0);
    return CloudsearchStatsGetIndexSecurityOption3;
}(SpeakeasyBase));
export { CloudsearchStatsGetIndexSecurityOption3 };
var CloudsearchStatsGetIndexSecurity = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetIndexSecurity, _super);
    function CloudsearchStatsGetIndexSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetIndexSecurityOption1)
    ], CloudsearchStatsGetIndexSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetIndexSecurityOption2)
    ], CloudsearchStatsGetIndexSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudsearchStatsGetIndexSecurityOption3)
    ], CloudsearchStatsGetIndexSecurity.prototype, "option3", void 0);
    return CloudsearchStatsGetIndexSecurity;
}(SpeakeasyBase));
export { CloudsearchStatsGetIndexSecurity };
var CloudsearchStatsGetIndexRequest = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetIndexRequest, _super);
    function CloudsearchStatsGetIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsGetIndexQueryParams)
    ], CloudsearchStatsGetIndexRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudsearchStatsGetIndexSecurity)
    ], CloudsearchStatsGetIndexRequest.prototype, "security", void 0);
    return CloudsearchStatsGetIndexRequest;
}(SpeakeasyBase));
export { CloudsearchStatsGetIndexRequest };
var CloudsearchStatsGetIndexResponse = /** @class */ (function (_super) {
    __extends(CloudsearchStatsGetIndexResponse, _super);
    function CloudsearchStatsGetIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudsearchStatsGetIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetCustomerIndexStatsResponse)
    ], CloudsearchStatsGetIndexResponse.prototype, "getCustomerIndexStatsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudsearchStatsGetIndexResponse.prototype, "statusCode", void 0);
    return CloudsearchStatsGetIndexResponse;
}(SpeakeasyBase));
export { CloudsearchStatsGetIndexResponse };
