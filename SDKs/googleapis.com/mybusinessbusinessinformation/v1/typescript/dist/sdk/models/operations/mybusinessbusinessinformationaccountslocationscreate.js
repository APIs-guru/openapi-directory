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
var MybusinessbusinessinformationAccountsLocationsCreatePathParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationAccountsLocationsCreatePathParams, _super);
    function MybusinessbusinessinformationAccountsLocationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreatePathParams.prototype, "parent", void 0);
    return MybusinessbusinessinformationAccountsLocationsCreatePathParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationAccountsLocationsCreatePathParams };
var MybusinessbusinessinformationAccountsLocationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationAccountsLocationsCreateQueryParams, _super);
    function MybusinessbusinessinformationAccountsLocationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], MybusinessbusinessinformationAccountsLocationsCreateQueryParams.prototype, "validateOnly", void 0);
    return MybusinessbusinessinformationAccountsLocationsCreateQueryParams;
}(SpeakeasyBase));
export { MybusinessbusinessinformationAccountsLocationsCreateQueryParams };
var MybusinessbusinessinformationAccountsLocationsCreateRequest = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationAccountsLocationsCreateRequest, _super);
    function MybusinessbusinessinformationAccountsLocationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationAccountsLocationsCreatePathParams)
    ], MybusinessbusinessinformationAccountsLocationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessbusinessinformationAccountsLocationsCreateQueryParams)
    ], MybusinessbusinessinformationAccountsLocationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LocationInput)
    ], MybusinessbusinessinformationAccountsLocationsCreateRequest.prototype, "request", void 0);
    return MybusinessbusinessinformationAccountsLocationsCreateRequest;
}(SpeakeasyBase));
export { MybusinessbusinessinformationAccountsLocationsCreateRequest };
var MybusinessbusinessinformationAccountsLocationsCreateResponse = /** @class */ (function (_super) {
    __extends(MybusinessbusinessinformationAccountsLocationsCreateResponse, _super);
    function MybusinessbusinessinformationAccountsLocationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessbusinessinformationAccountsLocationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Location)
    ], MybusinessbusinessinformationAccountsLocationsCreateResponse.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessbusinessinformationAccountsLocationsCreateResponse.prototype, "statusCode", void 0);
    return MybusinessbusinessinformationAccountsLocationsCreateResponse;
}(SpeakeasyBase));
export { MybusinessbusinessinformationAccountsLocationsCreateResponse };
