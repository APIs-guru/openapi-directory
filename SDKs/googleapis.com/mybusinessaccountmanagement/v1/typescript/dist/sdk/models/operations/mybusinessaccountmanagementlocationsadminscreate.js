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
var MybusinessaccountmanagementLocationsAdminsCreatePathParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsCreatePathParams, _super);
    function MybusinessaccountmanagementLocationsAdminsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreatePathParams.prototype, "parent", void 0);
    return MybusinessaccountmanagementLocationsAdminsCreatePathParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsCreatePathParams };
var MybusinessaccountmanagementLocationsAdminsCreateQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsCreateQueryParams, _super);
    function MybusinessaccountmanagementLocationsAdminsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessaccountmanagementLocationsAdminsCreateQueryParams;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsCreateQueryParams };
var MybusinessaccountmanagementLocationsAdminsCreateRequest = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsCreateRequest, _super);
    function MybusinessaccountmanagementLocationsAdminsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsAdminsCreatePathParams)
    ], MybusinessaccountmanagementLocationsAdminsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessaccountmanagementLocationsAdminsCreateQueryParams)
    ], MybusinessaccountmanagementLocationsAdminsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AdminInput)
    ], MybusinessaccountmanagementLocationsAdminsCreateRequest.prototype, "request", void 0);
    return MybusinessaccountmanagementLocationsAdminsCreateRequest;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsCreateRequest };
var MybusinessaccountmanagementLocationsAdminsCreateResponse = /** @class */ (function (_super) {
    __extends(MybusinessaccountmanagementLocationsAdminsCreateResponse, _super);
    function MybusinessaccountmanagementLocationsAdminsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Admin)
    ], MybusinessaccountmanagementLocationsAdminsCreateResponse.prototype, "admin", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessaccountmanagementLocationsAdminsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessaccountmanagementLocationsAdminsCreateResponse.prototype, "statusCode", void 0);
    return MybusinessaccountmanagementLocationsAdminsCreateResponse;
}(SpeakeasyBase));
export { MybusinessaccountmanagementLocationsAdminsCreateResponse };
