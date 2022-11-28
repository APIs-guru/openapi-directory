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
var RealtimebiddingBuyersUserListsOpenPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsOpenPathParams, _super);
    function RealtimebiddingBuyersUserListsOpenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenPathParams.prototype, "name", void 0);
    return RealtimebiddingBuyersUserListsOpenPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsOpenPathParams };
var RealtimebiddingBuyersUserListsOpenQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsOpenQueryParams, _super);
    function RealtimebiddingBuyersUserListsOpenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBuyersUserListsOpenQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsOpenQueryParams };
var RealtimebiddingBuyersUserListsOpenSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsOpenSecurity, _super);
    function RealtimebiddingBuyersUserListsOpenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBuyersUserListsOpenSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBuyersUserListsOpenSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBuyersUserListsOpenSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsOpenSecurity };
var RealtimebiddingBuyersUserListsOpenRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsOpenRequest, _super);
    function RealtimebiddingBuyersUserListsOpenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsOpenPathParams)
    ], RealtimebiddingBuyersUserListsOpenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsOpenQueryParams)
    ], RealtimebiddingBuyersUserListsOpenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], RealtimebiddingBuyersUserListsOpenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersUserListsOpenSecurity)
    ], RealtimebiddingBuyersUserListsOpenRequest.prototype, "security", void 0);
    return RealtimebiddingBuyersUserListsOpenRequest;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsOpenRequest };
var RealtimebiddingBuyersUserListsOpenResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersUserListsOpenResponse, _super);
    function RealtimebiddingBuyersUserListsOpenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersUserListsOpenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBuyersUserListsOpenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserList)
    ], RealtimebiddingBuyersUserListsOpenResponse.prototype, "userList", void 0);
    return RealtimebiddingBuyersUserListsOpenResponse;
}(SpeakeasyBase));
export { RealtimebiddingBuyersUserListsOpenResponse };
