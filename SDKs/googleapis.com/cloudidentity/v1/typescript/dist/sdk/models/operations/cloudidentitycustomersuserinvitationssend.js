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
var CloudidentityCustomersUserinvitationsSendPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsSendPathParams, _super);
    function CloudidentityCustomersUserinvitationsSendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendPathParams.prototype, "name", void 0);
    return CloudidentityCustomersUserinvitationsSendPathParams;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsSendPathParams };
var CloudidentityCustomersUserinvitationsSendQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsSendQueryParams, _super);
    function CloudidentityCustomersUserinvitationsSendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityCustomersUserinvitationsSendQueryParams;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsSendQueryParams };
var CloudidentityCustomersUserinvitationsSendRequest = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsSendRequest, _super);
    function CloudidentityCustomersUserinvitationsSendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityCustomersUserinvitationsSendPathParams)
    ], CloudidentityCustomersUserinvitationsSendRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityCustomersUserinvitationsSendQueryParams)
    ], CloudidentityCustomersUserinvitationsSendRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CloudidentityCustomersUserinvitationsSendRequest.prototype, "request", void 0);
    return CloudidentityCustomersUserinvitationsSendRequest;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsSendRequest };
var CloudidentityCustomersUserinvitationsSendResponse = /** @class */ (function (_super) {
    __extends(CloudidentityCustomersUserinvitationsSendResponse, _super);
    function CloudidentityCustomersUserinvitationsSendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityCustomersUserinvitationsSendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityCustomersUserinvitationsSendResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityCustomersUserinvitationsSendResponse.prototype, "statusCode", void 0);
    return CloudidentityCustomersUserinvitationsSendResponse;
}(SpeakeasyBase));
export { CloudidentityCustomersUserinvitationsSendResponse };
