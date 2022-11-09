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
var CloudidentityCustomersUserinvitationsListPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsListPathParams, _super);
    function CloudidentityCustomersUserinvitationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListPathParams.prototype, "parent", void 0);
    return CloudidentityCustomersUserinvitationsListPathParams;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsListPathParams };
var CloudidentityCustomersUserinvitationsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsListQueryParams, _super);
    function CloudidentityCustomersUserinvitationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityCustomersUserinvitationsListQueryParams;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsListQueryParams };
var CloudidentityCustomersUserinvitationsListRequest = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsListRequest, _super);
    function CloudidentityCustomersUserinvitationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityCustomersUserinvitationsListPathParams)
    ], CloudidentityCustomersUserinvitationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityCustomersUserinvitationsListQueryParams)
    ], CloudidentityCustomersUserinvitationsListRequest.prototype, "queryParams", void 0);
    return CloudidentityCustomersUserinvitationsListRequest;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsListRequest };
var CloudidentityCustomersUserinvitationsListResponse = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsListResponse, _super);
    function CloudidentityCustomersUserinvitationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListUserInvitationsResponse)
    ], CloudidentityCustomersUserinvitationsListResponse.prototype, "listUserInvitationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityCustomersUserinvitationsListResponse.prototype, "statusCode", void 0);
    return CloudidentityCustomersUserinvitationsListResponse;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsListResponse };
