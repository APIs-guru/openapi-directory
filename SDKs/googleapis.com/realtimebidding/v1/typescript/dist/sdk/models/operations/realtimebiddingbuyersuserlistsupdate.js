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
var RealtimebiddingBuyersUserListsUpdatePathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsUpdatePathParams, _super);
    function RealtimebiddingBuyersUserListsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdatePathParams.prototype, "name", void 0);
    return RealtimebiddingBuyersUserListsUpdatePathParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsUpdatePathParams };
var RealtimebiddingBuyersUserListsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsUpdateQueryParams, _super);
    function RealtimebiddingBuyersUserListsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBuyersUserListsUpdateQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsUpdateQueryParams };
var RealtimebiddingBuyersUserListsUpdateSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsUpdateSecurity, _super);
    function RealtimebiddingBuyersUserListsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBuyersUserListsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBuyersUserListsUpdateSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBuyersUserListsUpdateSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsUpdateSecurity };
var RealtimebiddingBuyersUserListsUpdateRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsUpdateRequest, _super);
    function RealtimebiddingBuyersUserListsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsUpdatePathParams)
    ], RealtimebiddingBuyersUserListsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsUpdateQueryParams)
    ], RealtimebiddingBuyersUserListsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UserListInput)
    ], RealtimebiddingBuyersUserListsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsUpdateSecurity)
    ], RealtimebiddingBuyersUserListsUpdateRequest.prototype, "security", void 0);
    return RealtimebiddingBuyersUserListsUpdateRequest;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsUpdateRequest };
var RealtimebiddingBuyersUserListsUpdateResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsUpdateResponse, _super);
    function RealtimebiddingBuyersUserListsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBuyersUserListsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserList)
    ], RealtimebiddingBuyersUserListsUpdateResponse.prototype, "userList", void 0);
    return RealtimebiddingBuyersUserListsUpdateResponse;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsUpdateResponse };
