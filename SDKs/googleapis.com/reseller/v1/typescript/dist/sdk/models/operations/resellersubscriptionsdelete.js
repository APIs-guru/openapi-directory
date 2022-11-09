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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ResellerSubscriptionsDeletePathParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsDeletePathParams, _super);
    function ResellerSubscriptionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeletePathParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeletePathParams.prototype, "subscriptionId", void 0);
    return ResellerSubscriptionsDeletePathParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsDeletePathParams };
export var ResellerSubscriptionsDeleteDeletionTypeEnum;
(function (ResellerSubscriptionsDeleteDeletionTypeEnum) {
    ResellerSubscriptionsDeleteDeletionTypeEnum["DeletionTypeUndefined"] = "deletion_type_undefined";
    ResellerSubscriptionsDeleteDeletionTypeEnum["Cancel"] = "cancel";
    ResellerSubscriptionsDeleteDeletionTypeEnum["TransferToDirect"] = "transfer_to_direct";
})(ResellerSubscriptionsDeleteDeletionTypeEnum || (ResellerSubscriptionsDeleteDeletionTypeEnum = {}));
var ResellerSubscriptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsDeleteQueryParams, _super);
    function ResellerSubscriptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=deletionType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "deletionType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerSubscriptionsDeleteQueryParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsDeleteQueryParams };
var ResellerSubscriptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsDeleteSecurity, _super);
    function ResellerSubscriptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsDeleteSecurity.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsDeleteSecurity;
}(SpeakeasyBase));
export { ResellerSubscriptionsDeleteSecurity };
var ResellerSubscriptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsDeleteRequest, _super);
    function ResellerSubscriptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsDeletePathParams)
    ], ResellerSubscriptionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsDeleteQueryParams)
    ], ResellerSubscriptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsDeleteSecurity)
    ], ResellerSubscriptionsDeleteRequest.prototype, "security", void 0);
    return ResellerSubscriptionsDeleteRequest;
}(SpeakeasyBase));
export { ResellerSubscriptionsDeleteRequest };
var ResellerSubscriptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsDeleteResponse, _super);
    function ResellerSubscriptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResellerSubscriptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsDeleteResponse.prototype, "statusCode", void 0);
    return ResellerSubscriptionsDeleteResponse;
}(SpeakeasyBase));
export { ResellerSubscriptionsDeleteResponse };
