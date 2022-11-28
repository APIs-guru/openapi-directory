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
var ServiceconsumermanagementServicesTenancyUnitsListPathParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsListPathParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListPathParams.prototype, "parent", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsListPathParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsListPathParams };
var ServiceconsumermanagementServicesTenancyUnitsListQueryParams = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsListQueryParams, _super);
    function ServiceconsumermanagementServicesTenancyUnitsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsListQueryParams;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsListQueryParams };
var ServiceconsumermanagementServicesTenancyUnitsListSecurity = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsListSecurity, _super);
    function ServiceconsumermanagementServicesTenancyUnitsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceconsumermanagementServicesTenancyUnitsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceconsumermanagementServicesTenancyUnitsListSecurity.prototype, "oauth2c", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsListSecurity;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsListSecurity };
var ServiceconsumermanagementServicesTenancyUnitsListRequest = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsListRequest, _super);
    function ServiceconsumermanagementServicesTenancyUnitsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsListPathParams)
    ], ServiceconsumermanagementServicesTenancyUnitsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsListQueryParams)
    ], ServiceconsumermanagementServicesTenancyUnitsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceconsumermanagementServicesTenancyUnitsListSecurity)
    ], ServiceconsumermanagementServicesTenancyUnitsListRequest.prototype, "security", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsListRequest;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsListRequest };
var ServiceconsumermanagementServicesTenancyUnitsListResponse = /** @class */ (function (_super) {
    __extends(ServiceconsumermanagementServicesTenancyUnitsListResponse, _super);
    function ServiceconsumermanagementServicesTenancyUnitsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceconsumermanagementServicesTenancyUnitsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListTenancyUnitsResponse)
    ], ServiceconsumermanagementServicesTenancyUnitsListResponse.prototype, "listTenancyUnitsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceconsumermanagementServicesTenancyUnitsListResponse.prototype, "statusCode", void 0);
    return ServiceconsumermanagementServicesTenancyUnitsListResponse;
}(SpeakeasyBase));
export { ServiceconsumermanagementServicesTenancyUnitsListResponse };
